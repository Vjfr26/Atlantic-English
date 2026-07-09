import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import Stat from '../components/Stat'
import { team } from '../data/team'

const values = [
  {
    icon: 'chat',
    title: 'Falar primeiro',
    text: 'Acreditamos que uma língua se aprende a usá-la. Nas nossas aulas, os alunos falam mais do que os professores.',
  },
  {
    icon: 'users',
    title: 'Cada aluno conta',
    text: 'Turmas reduzidas e acompanhamento individual: conhecemos o nome, os objetivos e os progressos de cada aluno.',
  },
  {
    icon: 'spark',
    title: 'Rigor com alegria',
    text: 'Levamos os resultados a sério — e a diversão também. Aulas dinâmicas onde apetece voltar.',
  },
]

const milestones = [
  { year: '2012', text: 'Abrimos as portas na Av. da Liberdade com duas salas e 30 alunos.' },
  { year: '2015', text: 'Tornámo-nos centro parceiro de preparação para exames Cambridge.' },
  { year: '2019', text: 'Lançámos os programas in-company e o departamento de Business English.' },
  { year: '2021', text: 'Estreámos as aulas online ao vivo — hoje, 1 em cada 4 alunos estuda à distância.' },
  { year: '2026', text: 'Mais de 1.200 alunos formados e uma equipa de 12 professores nativos.' },
]

export default function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre Nós"
        title="Uma academia com sotaque britânico e coração português"
        subtitle="Desde 2012 na Avenida da Liberdade, em Lisboa, a provar que aprender inglês pode ser rigoroso, humano e divertido ao mesmo tempo."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="Equipa da Atlantic English Academy a trabalhar em conjunto"
                className="h-[420px] w-full rounded-[2rem] object-cover shadow-lg md:h-[480px]"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-navy-950 px-6 py-5 text-white shadow-xl md:-right-8">
                <div className="font-display text-3xl font-extrabold text-sun-400">2012</div>
                <div className="text-sm text-navy-200">ano de fundação</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="mb-4 inline-block rounded-full bg-sun-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sun-700">
              A nossa história
            </span>
            <h2 className="text-3xl font-bold text-navy-900 md:text-4xl">
              Começou com duas salas e uma convicção
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-navy-600">
              <p>
                A Atlantic English Academy nasceu em 2012, quando a Sarah Mitchell — professora
                londrina apaixonada por Lisboa — percebeu que faltava em Portugal uma escola onde o
                inglês se aprendesse a <em>falar</em>, e não apenas a decorar.
              </p>
              <p>
                Catorze anos depois, somos uma equipa de 12 professores nativos e formámos mais de
                1.200 alunos: enfermeiros que hoje trabalham em Londres, engenheiros que lideram
                equipas internacionais, crianças que cresceram bilingues.
              </p>
              <p>
                Continuamos no mesmo sítio, com a mesma convicção — e com a mesma chaleira a fazer
                chá para as aulas de conversação de sexta-feira.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Os nossos valores"
            title="Aquilo em que acreditamos"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10">
                  <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-sun-400">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-navy-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading eyebrow="Percurso" title="14 anos em 5 momentos" />
        <div className="relative space-y-10 border-l-2 border-navy-100 pl-8 md:pl-12">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[2.95rem] top-1 grid h-7 w-7 place-items-center rounded-full border-4 border-white bg-sun-400 md:-left-[3.95rem]" />
                <span className="font-display text-2xl font-extrabold text-navy-900">{m.year}</span>
                <p className="mt-1.5 leading-relaxed text-navy-600">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-950 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 md:grid-cols-4 lg:px-8">
          <Stat value={12} label="professores nativos" />
          <Stat value={38} label="nacionalidades de alunos" />
          <Stat value={1200} suffix="+" label="alunos formados" />
          <Stat value={96} suffix="%" label="aprovação em exames" />
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="A equipa"
          title="Os professores que vais adorar"
          subtitle="Nativos, certificados e — acima de tudo — apaixonados por ensinar."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group h-full overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-sun-600">{member.role}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-navy-400">
                    <Icon name="pin" className="h-3.5 w-3.5" />
                    {member.origin}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
