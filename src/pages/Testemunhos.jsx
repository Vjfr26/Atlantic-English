import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import TestimonialCard from '../components/TestimonialCard'
import Icon from '../components/Icon'
import { testimonials } from '../data/testimonials'

export default function Testemunhos() {
  const average = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1)

  return (
    <>
      <PageHeader
        eyebrow="Testemunhos"
        title="As histórias dos nossos alunos"
        subtitle={`Avaliação média de ${average.replace('.', ',')}★ — mas o que nos orgulha são as portas que o inglês abriu a cada um deles.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="rounded-[2rem] bg-navy-50/80 p-10 text-center md:p-14">
            <Icon name="graduation" className="mx-auto h-12 w-12 text-sun-500" />
            <h2 className="mx-auto mt-5 max-w-xl text-2xl font-bold text-navy-900 md:text-3xl">
              A próxima história de sucesso pode ser a sua
            </h2>
            <p className="mx-auto mt-3 max-w-md text-navy-600">
              Junte-se aos mais de 1.200 alunos que já aprenderam inglês connosco.
            </p>
            <Link
              to="/cursos"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-navy-800"
            >
              Ver cursos com vagas
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
