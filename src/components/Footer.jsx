import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sun-400 font-display text-xl font-extrabold text-navy-950">
              A
            </span>
            <span className="font-display text-white">
              <span className="block font-bold">Atlantic English</span>
              <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-sun-300">
                Academy · Lisboa
              </span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Desde 2012 a ajudar Portugal a falar inglês com confiança. Professores nativos, turmas
            reduzidas e resultados comprovados.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display font-bold text-white">Navegação</h3>
          <ul className="space-y-2 text-sm">
            {[
              ['Início', '/'],
              ['Cursos e Vagas', '/cursos'],
              ['Serviços', '/servicos'],
              ['Sobre Nós', '/sobre'],
              ['Testemunhos', '/testemunhos'],
              ['Contacto', '/contacto'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-sun-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-bold text-white">Contactos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="h-5 w-5 shrink-0 text-sun-400" />
              <span>
                Av. da Liberdade 110, 2.º
                <br />
                1250-146 Lisboa, Portugal
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-sun-400" />
              <a href="tel:+351211234567" className="hover:text-sun-300">
                +351 21 123 45 67
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-sun-400" />
              <a href="mailto:ola@atlanticenglish.pt" className="hover:text-sun-300">
                ola@atlanticenglish.pt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-bold text-white">Horário</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between gap-4">
              <span>Segunda – Sexta</span>
              <span className="text-white">09:00 – 21:30</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sábado</span>
              <span className="text-white">09:00 – 17:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Domingo</span>
              <span className="text-white">Encerrado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-navy-400 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Atlantic English Academy. Todos os direitos reservados.</p>
          <p>Lisboa · Portugal</p>
        </div>
      </div>
    </footer>
  )
}
