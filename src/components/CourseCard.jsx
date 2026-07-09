import { motion } from 'framer-motion'
import Icon from './Icon'
import { WEEKDAY_LABELS } from '../data/courses'
import { useEnrollment } from '../context/EnrollmentContext'

export default function CourseCard({ course, onEnroll, index = 0 }) {
  const { spotsLeft } = useEnrollment()
  const left = spotsLeft(course)
  const pct = Math.round(((course.capacity - left) / course.capacity) * 100)
  const full = left === 0
  const low = !full && left <= 3

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="flex flex-col rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy-900/10"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className="rounded-full px-3 py-1 text-xs font-bold text-white"
          style={{ backgroundColor: course.color }}
        >
          {course.level}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            full
              ? 'bg-red-100 text-red-700'
              : low
                ? 'bg-sun-100 text-sun-700'
                : 'bg-emerald-100 text-emerald-700'
          }`}
        >
          {full ? 'Turma cheia' : low ? `Últimas ${left} vagas` : `${left} vagas disponíveis`}
        </span>
      </div>

      <h3 className="text-xl font-bold text-navy-900">{course.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{course.description}</p>

      <ul className="mt-4 space-y-2 text-sm text-navy-700">
        <li className="flex items-center gap-2.5">
          <Icon name="calendar" className="h-4.5 w-4.5 text-navy-400" />
          {course.days.map((d) => WEEKDAY_LABELS[d]).join(' e ')}
        </li>
        <li className="flex items-center gap-2.5">
          <Icon name="clock" className="h-4.5 w-4.5 text-navy-400" />
          {course.time}
        </li>
        <li className="flex items-center gap-2.5">
          <Icon name="user" className="h-4.5 w-4.5 text-navy-400" />
          {course.teacher}
        </li>
      </ul>

      <div className="mt-5">
        <div className="mb-1.5 flex justify-between text-xs font-medium text-navy-500">
          <span>Ocupação da turma</span>
          <span>
            {course.capacity - left}/{course.capacity}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-navy-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className={`h-full rounded-full ${
              full ? 'bg-red-500' : low ? 'bg-sun-400' : 'bg-emerald-500'
            }`}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-navy-100 pt-5">
        <div>
          <span className="font-display text-2xl font-extrabold text-navy-900">
            {course.price}€
          </span>
          <span className="text-sm text-navy-500"> /mês</span>
        </div>
        <button
          onClick={() => onEnroll(course)}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
            full
              ? 'bg-navy-100 text-navy-600 hover:bg-navy-200'
              : 'bg-navy-900 text-white hover:scale-105 hover:bg-navy-800'
          }`}
        >
          {full ? 'Lista de espera' : 'Inscrever-me'}
        </button>
      </div>
    </motion.article>
  )
}
