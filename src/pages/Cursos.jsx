import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CourseCard from '../components/CourseCard'
import AvailabilityCalendar from '../components/AvailabilityCalendar'
import EnrollModal from '../components/EnrollModal'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { courses, TERM } from '../data/courses'
import { useEnrollment } from '../context/EnrollmentContext'

export default function Cursos() {
  const [enrollCourse, setEnrollCourse] = useState(null)
  const { spotsLeft } = useEnrollment()

  const totalSpots = courses.reduce((sum, c) => sum + spotsLeft(c), 0)
  const openClasses = courses.filter((c) => spotsLeft(c) > 0).length

  return (
    <>
      <PageHeader
        eyebrow={TERM.name}
        title="Cursos, vagas e calendário"
        subtitle="Consulte as vagas disponíveis em tempo real, veja o calendário de aulas do mês e faça o seu pedido de inscrição em menos de um minuto."
      />

      {/* Quick availability summary */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="-mt-10 relative z-10">
          <div className="grid gap-4 rounded-3xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/10 sm:grid-cols-3 md:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                <Icon name="users" className="h-7 w-7" />
              </span>
              <div>
                <div className="font-display text-2xl font-extrabold text-navy-900">
                  {totalSpots}
                </div>
                <div className="text-sm text-navy-500">vagas disponíveis agora</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-sun-100 p-3 text-sun-600">
                <Icon name="graduation" className="h-7 w-7" />
              </span>
              <div>
                <div className="font-display text-2xl font-extrabold text-navy-900">
                  {openClasses} de {courses.length}
                </div>
                <div className="text-sm text-navy-500">turmas com inscrições abertas</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-navy-100 p-3 text-navy-700">
                <Icon name="calendar" className="h-7 w-7" />
              </span>
              <div>
                <div className="font-display text-2xl font-extrabold text-navy-900">29 jun – 26 set</div>
                <div className="text-sm text-navy-500">{TERM.name}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Courses grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Turmas abertas"
          title="Escolha o seu curso"
          subtitle="As vagas mostradas são reais e atualizam com cada pedido de inscrição. Turma cheia? Entre na lista de espera e será o primeiro a saber."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} onEnroll={setEnrollCourse} />
          ))}
        </div>
      </section>

      {/* Calendar */}
      <section className="bg-navy-50/60 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Calendário do mês"
            title="Vagas ocupadas e disponíveis, dia a dia"
            subtitle="Verde: há vagas nas turmas desse dia. Amarelo: últimas vagas. Vermelho: todas as turmas do dia estão completas. Clique num dia para ver o detalhe."
          />
          <Reveal>
            <AvailabilityCalendar onEnroll={setEnrollCourse} />
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Inscrever-se é simples"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Envie o pedido',
              text: 'Escolha a turma com vagas e preencha o formulário — reservamos provisoriamente o seu lugar.',
            },
            {
              step: '02',
              title: 'Teste de nível grátis',
              text: 'Confirmamos o seu nível com um teste rápido, oral e escrito, presencial ou online.',
            },
            {
              step: '03',
              title: 'Comece as aulas',
              text: 'Formalize a inscrição na secretaria e junte-se à turma na aula seguinte. Welcome aboard!',
            },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12}>
              <div className="relative h-full rounded-3xl border border-navy-100 bg-white p-8">
                <span className="font-display text-5xl font-extrabold text-navy-100">{s.step}</span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <EnrollModal course={enrollCourse} onClose={() => setEnrollCourse(null)} />
    </>
  )
}
