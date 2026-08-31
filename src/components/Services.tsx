import {
  Activity,
  CircleDot,
  Droplets,
  Footprints,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react'

const services = [
  {
    title: 'Valoración del pie',
    description:
      'Evaluación inicial para identificar alteraciones, molestias y necesidades específicas del pie.',
    icon: Stethoscope,
  },
  {
    title: 'Profilaxis podológica',
    description:
      'Limpieza y cuidado profesional de uñas, piel y zonas que requieren atención podológica.',
    icon: ShieldCheck,
  },
  {
    title: 'Uñas encarnadas',
    description:
      'Atención especializada para el manejo y cuidado de uñas que generan dolor o inflamación.',
    icon: CircleDot,
  },
  {
    title: 'Curaciones',
    description:
      'Atención y cuidado de lesiones y heridas del pie siguiendo protocolos de higiene y bioseguridad.',
    icon: Droplets,
  },
  {
    title: 'Pie diabético',
    description:
      'Cuidado preventivo y atención especializada para proteger la salud de los pies.',
    icon: HeartPulse,
  },
  {
    title: 'Micosis / Pie de atleta',
    description:
      'Evaluación y cuidado de alteraciones frecuentes de la piel y uñas asociadas a hongos.',
    icon: Activity,
  },
  {
    title: 'Callosidades',
    description:
      'Tratamiento profesional de zonas de piel engrosada, endurecida o con molestias.',
    icon: Footprints,
  },
  {
    title: 'Exfoliación',
    description:
      'Cuidado de la piel para mejorar su textura y mantener los pies suaves y saludables.',
    icon: Sparkles,
  },
  {
    title: 'Reflexología',
    description:
      'Sesión enfocada en proporcionar relajación y bienestar mediante técnicas de reflexología podal.',
    icon: Leaf,
  },
]

function Services() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#315A72]">
            Nuestros servicios
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Cuidado podológico para diferentes necesidades
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Recibe atención profesional sin salir de casa, con servicios
            adaptados a las necesidades de tus pies.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-[#315A72]/10 bg-[#FAF8F3] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315A72]/30 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7EEF2] text-[#315A72] transition-all duration-300 group-hover:bg-[#315A72] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-[#315A72]/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-stone-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-relaxed text-stone-600">
                  {service.description}
                </p>

                <a
                  href={`https://wa.me/51910632406?text=${encodeURIComponent(
                    `Hola, estoy interesado/a en el servicio de ${service.title} de Podología y Curaciones Especializadas. Me gustaría recibir información y consultar disponibilidad.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#315A72] transition hover:text-[#27485C]"
                >
                  Consultar servicio
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services