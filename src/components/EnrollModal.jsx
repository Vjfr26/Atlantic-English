import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import { WEEKDAY_LABELS } from '../data/courses'
import { useEnrollment } from '../context/EnrollmentContext'

export default function EnrollModal({ course, onClose }) {
  const { spotsLeft, enroll } = useEnrollment()
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [done, setDone] = useState(null) // 'enrolled' | 'waitlist'

  const open = Boolean(course)
  const full = course ? spotsLeft(course) === 0 : false

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (full) {
      setDone('waitlist')
      return
    }
    const ok = enroll({ courseId: course.id, ...form })
    setDone(ok ? 'enrolled' : 'waitlist')
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setDone(null)
      setForm({ name: '', email: '', phone: '' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-navy-950/70 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {done ? (
              <div className="p-8 text-center">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12, delay: 0.1 }}
                  className={`mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full ${
                    done === 'enrolled' ? 'bg-emerald-100 text-emerald-600' : 'bg-sun-100 text-sun-600'
                  }`}
                >
                  <Icon name={done === 'enrolled' ? 'check' : 'clock'} className="h-10 w-10" />
                </motion.span>
                <h3 className="text-2xl font-bold text-navy-900">
                  {done === 'enrolled' ? 'Pedido enviado!' : 'Está na lista de espera'}
                </h3>
                <p className="mt-3 text-navy-600">
                  {done === 'enrolled'
                    ? `Reservámos provisoriamente a sua vaga em ${course.name}. Entraremos em contacto no prazo de 24h úteis para confirmar a inscrição.`
                    : `A turma de ${course.name} está cheia, mas guardámos o seu contacto. Avisaremos assim que abrir uma vaga ou uma nova turma.`}
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 w-full rounded-full bg-navy-900 py-3 font-bold text-white transition-colors hover:bg-navy-800"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <div className="bg-navy-950 p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-300">
                        {full ? 'Lista de espera' : 'Pedido de inscrição'}
                      </p>
                      <h3 className="mt-1 text-xl font-bold">{course.name}</h3>
                      <p className="mt-1 text-sm text-navy-200">
                        {course.days.map((d) => WEEKDAY_LABELS[d]).join(' e ')} · {course.time} ·{' '}
                        {course.price}€/mês
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-white/10"
                      aria-label="Fechar"
                    >
                      <Icon name="x" className="h-5 w-5" />
                    </button>
                  </div>
                  {!full && (
                    <p className="mt-3 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
                      {spotsLeft(course)} vagas disponíveis
                    </p>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 p-6">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Nome completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="O seu nome"
                      className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nome@exemplo.pt"
                      className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Telemóvel
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+351 9XX XXX XXX"
                      className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-sun-400 py-3.5 font-bold text-navy-950 transition-all hover:scale-[1.02] hover:bg-sun-300"
                  >
                    {full ? 'Entrar na lista de espera' : 'Enviar pedido de inscrição'}
                  </button>
                  <p className="text-center text-xs text-navy-400">
                    Sem compromisso — a inscrição só é confirmada após contacto da secretaria.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
