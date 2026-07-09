// Weekdays follow JS Date convention: 0 = Domingo … 6 = Sábado
export const WEEKDAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export const TERM = {
  name: 'Trimestre de Verão 2026',
  start: '2026-06-29',
  end: '2026-09-26',
}

export const courses = [
  {
    id: 'geral-a1',
    name: 'Inglês Geral A1',
    level: 'A1 · Iniciante',
    days: [1, 3],
    time: '18:30 – 20:00',
    teacher: 'Sarah Mitchell',
    price: 89,
    capacity: 12,
    enrolled: 9,
    color: '#3b62b4',
    description:
      'Primeiros passos no inglês: vocabulário essencial, frases do dia a dia e muita prática oral desde a primeira aula.',
  },
  {
    id: 'geral-a2',
    name: 'Inglês Geral A2',
    level: 'A2 · Elementar',
    days: [2, 4],
    time: '18:30 – 20:00',
    teacher: 'James O’Connor',
    price: 89,
    capacity: 12,
    enrolled: 12,
    color: '#3b62b4',
    description:
      'Consolide as bases e ganhe autonomia em conversas simples, viagens e situações quotidianas.',
  },
  {
    id: 'geral-b1',
    name: 'Inglês Geral B1',
    level: 'B1 · Intermédio',
    days: [1, 3],
    time: '19:45 – 21:15',
    teacher: 'Emma Whitfield',
    price: 95,
    capacity: 14,
    enrolled: 6,
    color: '#2c4c93',
    description:
      'Fluência crescente: debates, escrita funcional e compreensão de conteúdos autênticos em inglês.',
  },
  {
    id: 'geral-b2',
    name: 'Inglês Geral B2',
    level: 'B2 · Pós-intermédio',
    days: [2, 4],
    time: '19:45 – 21:15',
    teacher: 'Emma Whitfield',
    price: 95,
    capacity: 14,
    enrolled: 11,
    color: '#2c4c93',
    description:
      'Prepare-se para usar o inglês com confiança no trabalho, nos estudos e em contextos internacionais.',
  },
  {
    id: 'ielts',
    name: 'Preparação IELTS',
    level: 'B2–C1 · Exame',
    days: [6],
    time: '10:00 – 13:00',
    teacher: 'Daniel Hughes',
    price: 139,
    capacity: 10,
    enrolled: 7,
    color: '#dd6a02',
    description:
      'Estratégias específicas para as quatro provas do IELTS, com simulações reais e feedback individual.',
  },
  {
    id: 'cambridge-c1',
    name: 'Cambridge C1 Advanced',
    level: 'C1 · Exame',
    days: [6],
    time: '14:00 – 17:00',
    teacher: 'Daniel Hughes',
    price: 139,
    capacity: 10,
    enrolled: 10,
    color: '#dd6a02',
    description:
      'Curso intensivo para o CAE: técnica de exame, vocabulário avançado e prática cronometrada.',
  },
  {
    id: 'business',
    name: 'Business English',
    level: 'B1+ · Profissional',
    days: [5],
    time: '18:00 – 20:00',
    teacher: 'James O’Connor',
    price: 119,
    capacity: 8,
    enrolled: 5,
    color: '#14807a',
    description:
      'Reuniões, apresentações, negociação e e-mails profissionais — inglês para avançar na carreira.',
  },
  {
    id: 'kids',
    name: 'Inglês para Crianças',
    level: '7–11 anos · Júnior',
    days: [3, 5],
    time: '17:00 – 18:00',
    teacher: 'Sarah Mitchell',
    price: 69,
    capacity: 10,
    enrolled: 4,
    color: '#b74906',
    description:
      'Aprender a brincar: jogos, músicas e histórias que fazem os mais novos apaixonarem-se pelo inglês.',
  },
]
