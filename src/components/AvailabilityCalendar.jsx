import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import { courses, TERM, WEEKDAY_LABELS } from '../data/courses'
import { useEnrollment } from '../context/EnrollmentContext'

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

const toKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const parseISO = (s) => {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export default function AvailabilityCalendar({ onEnroll }) {
  const { spotsLeft } = useEnrollment()
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const termStart = parseISO(TERM.start)
  const termEnd = parseISO(TERM.end)

  const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selected, setSelected] = useState(null)

  const canPrev = month > new Date(termStart.getFullYear(), termStart.getMonth(), 1)
  const canNext = month < new Date(termEnd.getFullYear(), termEnd.getMonth(), 1)

  const changeMonth = (delta) => {
    setSelected(null)
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() + delta, 1))
  }

  const weeks = useMemo(() => {
    const first = new Date(month)
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
    const lead = (first.getDay() + 6) % 7 // weeks start Monday
    const cells = Array.from({ length: lead }, () => null)

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(month.getFullYear(), month.getMonth(), day)
      const inTerm = date >= termStart && date <= termEnd
      const sessions = inTerm
        ? courses
            .filter((c) => c.days.includes(date.getDay()))
            .map((c) => ({ course: c, left: spotsLeft(c) }))
        : []
      const totalLeft = sessions.reduce((sum, s) => sum + s.left, 0)
      const status =
        sessions.length === 0
          ? 'none'
          : totalLeft === 0
            ? 'full'
            : totalLeft <= 4
              ? 'low'
              : 'open'
      cells.push({ date, day, sessions, status, past: date < today })
    }
    while (cells.length % 7 !== 0) cells.push(null)

    const rows = []
    for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
    return rows
  }, [month, spotsLeft]) // eslint-disable-line react-hooks/exhaustive-deps

  const statusStyles = {
    none: 'bg-navy-50 text-navy-300 cursor-default',
    open: 'bg-emerald-50 text-emerald-900 border border-emerald-200 hover:border-emerald-400 hover:shadow-md cursor-pointer',
    low: 'bg-sun-50 text-sun-800 border border-sun-200 hover:border-sun-400 hover:shadow-md cursor-pointer',
    full: 'bg-red-50 text-red-700 border border-red-200 hover:border-red-400 hover:shadow-md cursor-pointer',
  }

  const dotStyles = { open: 'bg-emerald-500', low: 'bg-sun-500', full: 'bg-red-500' }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      {/* Calendar */}
      <div className="rounded-3xl border border-navy-100 bg-white p-5 shadow-sm md:p-7">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-navy-900 md:text-2xl">
            {MONTHS[month.getMonth()]} {month.getFullYear()}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => changeMonth(-1)}
              disabled={!canPrev}
              className="grid h-10 w-10 place-items-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:bg-navy-50 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Mês anterior"
            >
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={() => changeMonth(1)}
              disabled={!canNext}
              className="grid h-10 w-10 place-items-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:bg-navy-50 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Mês seguinte"
            >
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mb-2 grid grid-cols-7 gap-1.5 text-center text-xs font-bold uppercase tracking-wider text-navy-400">
          {[1, 2, 3, 4, 5, 6, 0].map((d) => (
            <div key={d}>{WEEKDAY_LABELS[d]}</div>
          ))}
        </div>

        <div className="space-y-1.5">
          {weeks.map((row, i) => (
            <div key={i} className="grid grid-cols-7 gap-1.5">
              {row.map((cell, j) =>
                cell === null ? (
                  <div key={j} />
                ) : (
                  <button
                    key={j}
                    onClick={() => cell.sessions.length && setSelected(cell)}
                    className={`relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm font-semibold transition-all md:aspect-[4/3] ${
                      statusStyles[cell.status]
                    } ${cell.past ? 'opacity-40' : ''} ${
                      selected && toKey(selected.date) === toKey(cell.date)
                        ? 'ring-2 ring-navy-900 ring-offset-1'
                        : ''
                    }`}
                  >
                    <span>{cell.day}</span>
                    {cell.status !== 'none' && (
                      <span className="mt-1 flex gap-0.5">
                        {cell.sessions.slice(0, 3).map((s, k) => (
                          <span
                            key={k}
                            className={`h-1.5 w-1.5 rounded-full ${
                              s.left === 0 ? 'bg-red-400' : dotStyles[cell.status]
                            }`}
                          />
                        ))}
                      </span>
                    )}
                    {toKey(cell.date) === toKey(today) && (
                      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-navy-900" />
                    )}
                  </button>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-navy-100 pt-4 text-xs font-medium text-navy-600">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-emerald-200" /> Vagas disponíveis
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-sun-200" /> Últimas vagas
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-red-200" /> Completo
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-navy-100" /> Sem aulas
          </span>
        </div>
      </div>

      {/* Day detail */}
      <div className="rounded-3xl border border-navy-100 bg-navy-50/50 p-5 md:p-7">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={toKey(selected.date)}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-400">
                Aulas do dia
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-navy-900">
                {selected.date.getDate()} de {MONTHS[selected.date.getMonth()]}
              </h3>
              <div className="mt-4 space-y-3">
                {selected.sessions.map(({ course, left }) => (
                  <div
                    key={course.id}
                    className="rounded-2xl border border-navy-100 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-bold text-navy-900">{course.name}</p>
                        <p className="mt-0.5 text-sm text-navy-500">
                          {course.time} · {course.teacher}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${
                          left === 0
                            ? 'bg-red-100 text-red-700'
                            : left <= 3
                              ? 'bg-sun-100 text-sun-700'
                              : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {left === 0 ? 'Completo' : `${left} vagas`}
                      </span>
                    </div>
                    <button
                      onClick={() => onEnroll(course)}
                      className={`mt-3 w-full rounded-full py-2 text-sm font-bold transition-colors ${
                        left === 0
                          ? 'bg-navy-100 text-navy-600 hover:bg-navy-200'
                          : 'bg-navy-900 text-white hover:bg-navy-700'
                      }`}
                    >
                      {left === 0 ? 'Lista de espera' : 'Inscrever-me nesta turma'}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
            >
              <span className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-white text-navy-300 shadow-sm">
                <Icon name="calendar" className="h-8 w-8" />
              </span>
              <h3 className="font-display text-lg font-bold text-navy-800">
                Selecione um dia no calendário
              </h3>
              <p className="mt-2 max-w-xs text-sm text-navy-500">
                Veja as turmas com aulas nesse dia, as vagas disponíveis em tempo real e
                inscreva-se diretamente.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
