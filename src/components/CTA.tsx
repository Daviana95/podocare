import { ArrowRight, MessageCircle } from 'lucide-react'

function CTA() {
  return (
    <section id="contacto" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#315A72] px-7 py-14 text-center shadow-xl md:px-16 md:py-20">

          {/* Detalles decorativos */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-400/10" />

          <div className="relative">
            
            {/* Icono */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
              <MessageCircle size={27} strokeWidth={1.8} />
            </div>

            <span className="mt-6 inline-block text-sm font-bold uppercase tracking-widest text-white/80">
              Agenda tu atención
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Dale a tus pies el cuidado que merecen
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Recibe atención podológica profesional en la comodidad de tu
              hogar. Escríbenos y coordinemos tu cita.
            </p>

            {/* Botón */}
            <a
              href="https://wa.me/51910632406?text=Hola%20PodoCare%2C%20quiero%20agendar%20una%20atenci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#315A72] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Reservar por WhatsApp

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <p className="mt-5 text-sm text-white/60">
              Atención a domicilio · Chorrillos · Surco · Miraflores · San Isidro
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA