import {
  CalendarCheck,
  House,
  MessageCircle,
  MapPin,
} from 'lucide-react'

const zones = ['Chorrillos', 'Surco', 'Miraflores', 'San Isidro']

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
    <section
      id="zonas"
      className="bg-[#F4F1E8] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Zonas */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#315A72]">
            Atención a domicilio
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Llegamos hasta tu hogar
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Actualmente brindamos atención podológica a domicilio en los
            siguientes distritos:
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
          {zones.map((zone) => (
            <div
              key={zone}
              className="flex items-center gap-2 rounded-full border border-[#315A72]/20 bg-white px-5 py-3 shadow-sm"
            >
              <MapPin
                size={18}
                strokeWidth={1.8}
                className="text-[#315A72]"
              />

              <span className="font-semibold text-stone-700">
                {zone}
              </span>
            </div>
          ))}
        </div>

        {/* Proceso */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Así de sencillo
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Recibe tu atención en 3 pasos
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315A72]/30 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-all duration-300 group-hover:bg-[#315A72] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="text-4xl font-bold text-stone-100">
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