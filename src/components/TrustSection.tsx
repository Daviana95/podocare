import {
  Award,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react'

const trustItems = [
  {
    icon: Award,
    title: '15 años de experiencia',
    description:
      'Experiencia clínica en Enfermería aplicada al cuidado y atención de pacientes.',
  },
  {
    icon: GraduationCap,
    title: 'Podología Clínica',
    description:
      'Formación especializada en Podología Clínica en el Instituto Ser Salud.',
  },
  {
    icon: ShieldCheck,
    title: 'Bioseguridad y esterilización',
    description:
      'Instrumental esterilizado y protocolos de higiene para una atención segura.',
  },
]

function TrustSection() {
  return (
    <section
      id="nosotros"
      className="bg-[#EAF1F5] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#315A72]">
            ¿Por qué elegirnos?
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Tu salud merece una atención profesional y segura
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Combinamos experiencia clínica, formación especializada y
            protocolos de bioseguridad para brindar atención podológica
            profesional directamente en tu hogar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-[#315A72]/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315A72]/25 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E7EEF2] text-[#315A72] transition-all duration-300 group-hover:bg-[#315A72] group-hover:text-white">
                  <Icon size={28} strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustSection