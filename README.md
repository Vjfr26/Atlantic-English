# Atlantic English Academy — Sitio web

Sitio web para una academia de inglés en Lisboa (Portugal), construido con React. El contenido está en portugués (pt-PT).

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** — sistema de diseño (paleta navy/ámbar, tipografías Sora + Inter)
- **Framer Motion** — animaciones (hero, reveals al hacer scroll, contadores, modales)
- **React Router 7** — navegación entre páginas
- **Leaflet + React Leaflet** — mapa de ubicación (OpenStreetMap, sin API key)

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:5173
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
```

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio: hero animado, estadísticas, vista previa de servicios, cursos con plazas y testimonios |
| `/cursos` | Cursos con plazas en tiempo real, calendario mensual de disponibilidad e inscripción |
| `/servicos` | Los 6 servicios de la academia |
| `/sobre` | Historia, valores, cronología y equipo |
| `/testemunhos` | Testimonios de alumnos |
| `/contacto` | Formulario de contacto, datos y mapa con la ubicación |

## Plazas e inscripciones

- Los cursos y sus cupos están definidos en `src/data/courses.js` (capacidad, matriculados, horarios, trimestre).
- Las solicitudes de inscripción se gestionan en `src/context/EnrollmentContext.jsx` y se persisten en `localStorage` (clave `aea-enrollment-requests`): al inscribirse, las plazas disponibles bajan en toda la web (tarjetas, calendario, contadores).
- El calendario (`src/components/AvailabilityCalendar.jsx`) colorea cada día del mes según la disponibilidad agregada de las clases de ese día: verde (plazas), ámbar (últimas plazas), rojo (completo), gris (sin clases). Al hacer clic en un día se ven las clases de ese día y se puede solicitar plaza.

Para conectar un backend real, sustituye el contexto de inscripciones por llamadas a tu API y alimenta `courses.js` desde el servidor.

## Notas

- Las imágenes son de Unsplash (hotlink); para producción conviene descargarlas y servirlas localmente.
- El formulario de contacto y el de inscripción son simulados (no envían email); están listos para conectar a un endpoint.
