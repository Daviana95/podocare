import {
  CalendarCheck,
  House,
  MessageCircle,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Escríbenos',
    description:
      'Cuéntanos qué necesitas y recibe información sobre el servicio que te interesa.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Coordinamos',
    description:
      'Elegimos contigo el día, horario y dirección para tu atención.',
  },
  {
    number: '03',
    icon: House,
    title: 'Te atendemos en casa',
    description:
      'Carmen llega a tu domicilio con el instrumental necesario para brindarte una atención profesional.',
  },
]

function LocationProcess() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#315A72]">
            Así de sencillo
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Recibe tu atención en 3 pasos
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Coordina tu atención de forma rápida y sencilla directamente por
            WhatsApp.
          </p>
        </div>

        {/* Pasos */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-[#315A72]/10 bg-[#FAF8F3] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315A72]/30 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7EEF2] text-[#315A72] transition-all duration-300 group-hover:bg-[#315A72] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="text-4xl font-bold text-[#315A72]/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-stone-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default LocationProcess