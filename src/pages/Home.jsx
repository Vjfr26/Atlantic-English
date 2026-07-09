import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Stat from '../components/Stat'
import CourseCard from '../components/CourseCard'
import TestimonialCard from '../components/TestimonialCard'
import EnrollModal from '../components/EnrollModal'
import { courses } from '../data/courses'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { useEnrollment } from '../context/EnrollmentContext'

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.6, 0.35, 1] } },
}

const highlights = [
  {
    icon: 'users',
    title: 'Turmas reduzidas',
    text: 'Máximo de 14 alunos por turma para garantir que todos falam em todas as aulas.',
  },
  {
    icon: 'globe',
    title: 'Professores nativos',
    text: 'Equipa 100% nativa e certificada (CELTA/DELTA), com anos de experiência em Portugal.',
  },
  {
    icon: 'badge',
    title: 'Preparação para exames',
    text: '96% de aprovação em IELTS, TOEFL e Cambridge nos últimos três anos.',
  },
  {
    icon: 'spark',
    title: 'Método comunicativo',
    text: 'Menos gramática decorada, mais conversação real desde o primeiro dia.',
  },
]

export default function Home() {
  const [enrollCourse, setEnrollCourse] = useState(null)
  const { spotsLeft } = useEnrollment()
  const totalSpots = courses.reduce((sum, c) => sum + spotsLeft(c), 0)

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-36 md:pt-44 lg:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float-slow absolute -top-20 right-[8%] h-96 w-96 rounded-full bg-sun-500/15 blur-3xl" />
          <div className="animate-float-slower absolute bottom-0 left-[-5%] h-[28rem] w-[28rem] rounded-full bg-navy-500/30 blur-3xl" />
          <div className="animate-float-slow absolute left-[40%] top-[55%] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="show">
            <motion.span
              variants={heroItem}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sun-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {totalSpots} vagas abertas este trimestre
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              O inglês que te leva{' '}
              <span className="relative whitespace-nowrap text-sun-400">
                mais longe
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full text-sun-500/60"
                  fill="none"
                >
                  <path
                    d="M3 9c40-6 140-6 214-3"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={heroItem} className="mt-6 max-w-lg text-lg text-navy-200">
              Academia de inglês no coração de Lisboa. Professores nativos, turmas reduzidas e um
              método que põe toda a gente a falar — do A1 ao C2.
            </motion.p>

            <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/cursos"
                className="group inline-flex items-center gap-2 rounded-full bg-sun-400 px-7 py-3.5 font-bold text-navy-950 transition-all hover:scale-105 hover:bg-sun-300"
              >
                Ver cursos e vagas
                <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white/10"
              >
                Marcar teste de nível grátis
              </Link>
            </motion.div>

            <motion.div variants={heroItem} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {testimonials.slice(0, 4).map((t) => (
                  <img
                    key={t.name}
                    src={t.photo}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-navy-950 object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-navy-200">
                <span className="flex items-center gap-1 font-bold text-white">
                  4.9
                  <Icon name="star" filled className="h-4 w-4 text-sun-400" />
                </span>
                +1.200 alunos formados
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-950/60">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=80"
                alt="Alunos a estudar inglês em grupo"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-10 top-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
                <Icon name="check" className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-sm font-bold text-navy-900">96% aprovação</div>
                <div className="text-xs text-navy-500">exames Cambridge & IELTS</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-8 bottom-12 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sun-100 text-sun-600">
                <Icon name="graduation" className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-sm font-bold text-navy-900">Do A1 ao C2</div>
                <div className="text-xs text-navy-500">todos os níveis do QECR</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== Accreditations marquee ===== */}
      <div className="overflow-hidden border-y border-navy-100 bg-white py-5">
        <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
          {Array.from({ length: 2 }).flatMap((_, copy) =>
            [
              'Cambridge Assessment English',
              'IELTS Official Test Centre Partner',
              'TOEFL iBT',
              'Quadro Europeu Comum (QECR)',
              'CELTA & DELTA Teachers',
              'Membro APPI Portugal',
            ].map((label) => (
              <span
                key={`${copy}-${label}`}
                className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-widest text-navy-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sun-400" />
                {label}
              </span>
            )),
          )}
        </div>
      </div>

      {/* ===== Highlights ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Porquê a Atlantic"
          title="Uma forma diferente de aprender inglês"
          subtitle="Não somos mais uma escola de línguas. Somos a equipa que vai fazer-te finalmente falar inglês com confiança."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-7 transition-all hover:-translate-y-1.5 hover:border-sun-300 hover:shadow-xl hover:shadow-navy-900/10">
                <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-sun-400 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={h.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-bold text-navy-900">{h.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Stats band ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float-slower absolute -right-20 top-0 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 md:grid-cols-4 lg:px-8">
          <Stat value={14} label="anos a ensinar em Lisboa" />
          <Stat value={1200} suffix="+" label="alunos formados" />
          <Stat value={96} suffix="%" label="aprovação em exames" />
          <Stat value={4} suffix=".9★" label="avaliação média" />
        </div>
      </section>

      {/* ===== Services preview ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Um curso para cada objetivo"
          subtitle="Do primeiro «hello» ao C2, passando por exames internacionais e inglês profissional."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12}>
              <Link
                to="/servicos"
                className="group block h-full overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-sun-400 text-navy-950">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy-900 group-hover:text-sun-600">
                    Saber mais
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Courses with live availability ===== */}
      <section className="bg-navy-50/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Vagas em tempo real"
            title="Turmas com inscrições abertas"
            subtitle="As vagas atualizam ao segundo. Garante o teu lugar antes que a turma feche."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} onEnroll={setEnrollCourse} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              to="/cursos"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-navy-800"
            >
              Ver todos os cursos e o calendário de vagas
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== Testimonials preview ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Testemunhos"
          title="Quem aprendeu connosco, recomenda"
          subtitle="Histórias reais de alunos que mudaram de carreira, de país e de vida com o inglês."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/testemunhos"
            className="inline-flex items-center gap-2 font-bold text-navy-900 underline decoration-sun-400 decoration-4 underline-offset-8 hover:text-sun-600"
          >
            Ler todos os testemunhos
          </Link>
        </Reveal>
      </section>

      {/* ===== CTA banner ===== */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:pb-28 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-950 px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="animate-float-slow absolute -left-16 -top-16 h-64 w-64 rounded-full bg-sun-500/20 blur-3xl" />
              <div className="animate-float-slower absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-navy-500/40 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
                Não sabes o teu nível? Faz um{' '}
                <span className="text-sun-400">teste gratuito</span> connosco
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                Teste de nível oral e escrito, sem compromisso. Recebes o resultado no próprio dia,
                com uma recomendação de turma à tua medida.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contacto"
                  className="rounded-full bg-sun-400 px-8 py-4 font-bold text-navy-950 transition-all hover:scale-105 hover:bg-sun-300"
                >
                  Marcar teste de nível
                </Link>
                <Link
                  to="/cursos"
                  className="rounded-full border border-white/25 px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
                >
                  Ver vagas disponíveis
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <EnrollModal course={enrollCourse} onClose={() => setEnrollCourse(null)} />
    </>
  )
}
