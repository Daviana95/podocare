import { MapPin } from 'lucide-react'

const areas = ['Chorrillos', 'Surco', 'Miraflores', 'San Isidro']

function Areas() {
  return (
    <section id="zonas" className="bg-[#F4F1E8] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#315A72]">
            Atención a domicilio
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Llegamos hasta tu hogar
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Recibe atención podológica profesional sin salir de casa.
            Actualmente atendemos en los siguientes distritos:
          </p>
        </div>

        {/* Distritos */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="group rounded-3xl border border-[#315A72]/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315A72]/30 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7EEF2] text-[#315A72] transition-all duration-300 group-hover:bg-[#315A72] group-hover:text-white">
                <MapPin size={25} strokeWidth={1.8} />
              </div>

              <h3 className="mt-5 font-bold text-stone-900">
                {area}
              </h3>

              <p className="mt-1 text-sm text-stone-500">
                Atención a domicilio
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Areas