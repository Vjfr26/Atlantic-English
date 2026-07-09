import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { services } from '../data/services'

export default function Servicos() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Tudo o que precisa para dominar o inglês"
        subtitle="Seis programas pensados para objetivos diferentes — todos com professores nativos, turmas reduzidas e acompanhamento próximo."
      />

      <section className="mx-auto max-w-7xl space-y-16 px-5 py-20 md:space-y-24 md:py-28 lg:px-8">
        {services.map((s, i) => (
          <Reveal key={s.id}>
            <article
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="group relative overflow-hidden rounded-[2rem] shadow-lg">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 grid h-14 w-14 place-items-center rounded-2xl bg-sun-400 text-navy-950 shadow-lg">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
              </div>

              <div>
                <span className="mb-3 inline-block rounded-full bg-navy-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy-700">
                  {String(i + 1).padStart(2, '0')} / 06
                </span>
                <h2 className="text-3xl font-bold text-navy-900 md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-navy-600">{s.description}</p>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-navy-800">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/cursos"
                    className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-navy-800"
                  >
                    Ver vagas disponíveis
                    <Icon
                      name="arrow"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 font-bold text-navy-900 transition-colors hover:bg-navy-50"
                  >
                    Pedir informações
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
