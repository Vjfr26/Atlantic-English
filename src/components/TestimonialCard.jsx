import { motion } from 'framer-motion'
import Icon from './Icon'

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, role, rating, text, photo } = testimonial
  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      whileHover={{ y: -6 }}
      className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy-900/10"
    >
      <Icon name="quote" filled className="h-8 w-8 text-sun-400" />
      <div className="mt-4 flex gap-1" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Icon
            key={i}
            name="star"
            filled
            className={`h-4 w-4 ${i < rating ? 'text-sun-400' : 'text-navy-100'}`}
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 leading-relaxed text-navy-700">“{text}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-navy-100 pt-5">
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-sun-200"
        />
        <div>
          <div className="font-bold text-navy-900">{name}</div>
          <div className="text-sm text-navy-500">{role}</div>
        </div>
      </figcaption>
    </motion.figure>
  )
}
