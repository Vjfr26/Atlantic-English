import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import MapView from '../components/MapView'

const contactInfo = [
  {
    icon: 'pin',
    title: 'Morada',
    lines: ['Av. da Liberdade 110, 2.º', '1250-146 Lisboa, Portugal'],
  },
  {
    icon: 'phone',
    title: 'Telefone',
    lines: ['+351 21 123 45 67', '+351 912 345 678'],
  },
  {
    icon: 'mail',
    title: 'Email',
    lines: ['ola@atlanticenglish.pt', 'cursos@atlanticenglish.pt'],
  },
  {
    icon: 'clock',
    title: 'Horário',
    lines: ['Seg–Sex: 09:00 – 21:30', 'Sábado: 09:00 – 17:00'],
  },
]

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Teste de nível gratuito', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-100'

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Fale connosco"
        subtitle="Tem dúvidas sobre níveis, horários ou preços? Quer marcar um teste de nível gratuito? Estamos aqui — e respondemos no próprio dia útil."
      />

      {/* Info cards */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative z-10 -mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, i) => (
            <Reveal key={info.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-sun-400">
                  <Icon name={info.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-bold text-navy-900">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-navy-600">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-navy-100 bg-white p-7 shadow-sm md:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-emerald-600"
                  >
                    <Icon name="check" className="h-10 w-10" />
                  </motion.span>
                  <h2 className="text-2xl font-bold text-navy-900">Mensagem enviada!</h2>
                  <p className="mt-3 max-w-sm text-navy-600">
                    Obrigado, {form.name.split(' ')[0] || 'caro aluno'}. Responderemos a{' '}
                    <strong>{form.email}</strong> no próprio dia útil.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false)
                      setForm({ name: '', email: '', subject: 'Teste de nível gratuito', message: '' })
                    }}
                    className="mt-6 rounded-full border border-navy-200 px-6 py-3 font-bold text-navy-900 transition-colors hover:bg-navy-50"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-navy-900">Envie-nos uma mensagem</h2>
                  <p className="mt-2 text-navy-600">
                    Preencha o formulário e entraremos em contacto consigo.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
                          Nome
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="O seu nome"
                          className={inputClass}
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
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-navy-800">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option>Teste de nível gratuito</option>
                        <option>Informações sobre cursos</option>
                        <option>Formação para empresas</option>
                        <option>Aulas particulares</option>
                        <option>Outro assunto</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-sun-400 py-4 font-bold text-navy-950 transition-all hover:scale-[1.02] hover:bg-sun-300"
                    >
                      Enviar mensagem
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-5">
              <MapView className="h-[420px] flex-1 lg:min-h-[480px]" />
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-navy-950 px-7 py-6 text-white">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun-400 text-navy-950">
                    <Icon name="pin" className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="font-bold">Estamos na Avenida da Liberdade</div>
                    <div className="text-sm text-navy-200">
                      Metro: Avenida (linha azul) · 2 min a pé
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=38.7198&mlon=-9.1445#map=17/38.7198/-9.1445"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-white/10"
                >
                  Obter direções
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
