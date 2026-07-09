import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full ${
            light ? 'bg-white/10 text-sun-300' : 'bg-sun-100 text-sun-700'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-navy-200' : 'text-navy-600'}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}
