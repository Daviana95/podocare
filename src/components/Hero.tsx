function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f4f1e8]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* Texto */}
        <div className="max-w-xl">
          <span className="mb-5 inline-block rounded-full bg-[#E7EEF2] px-4 py-2 text-sm font-semibold text-[#315A72]">
            ATENCIÓN PODOLÓGICA PROFESIONAL A DOMICILIO
          </span>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-6xl">
            Podología profesional,
            <span className="text-[#315A72]">
              {' '}directamente en tu hogar.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
            Atención podológica especializada con 15 años de experiencia
            clínica en Enfermería y formación en Podología Clínica, con atención
            a domicilio en Chorrillos, Surco, Miraflores y San Isidro.
          </p>

          {/* Credenciales */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#315A72]/20 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
              ✓ 15 años de experiencia
            </span>

            <span className="rounded-full border border-[#315A72]/20 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
              ✓ Podología Clínica
            </span>

            <span className="rounded-full border border-[#315A72]/20 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
              ✓ Bioseguridad
            </span>
          </div>

          {/* Botones */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/51910632406?text=Hola%2C%20quiero%20agendar%20una%20atenci%C3%B3n%20de%20Podolog%C3%ADa%20y%20Curaciones%20Especializadas."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#315A72] px-7 py-3.5 text-center font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#27485C] hover:shadow-lg"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-[#315A72]/20 bg-white px-7 py-3.5 text-center font-semibold text-[#315A72] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E7EEF2]"
            >
              Ver servicios
            </a>
          </div>

          {/* Zonas */}
          <p className="mt-6 text-sm font-medium text-stone-500">
            📍 Atención a domicilio en Chorrillos, Surco, Miraflores y San
            Isidro.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative flex items-center justify-center">
          <div className="overflow-hidden rounded-[2rem] border-2 border-[#315A72] bg-white p-2 shadow-[0_20px_45px_rgba(49,90,114,0.18)]">
            <img
              src="/podocare-hero.jpg"
              alt="Especialista realizando atención podológica profesional"
              className="h-auto max-h-[500px] w-full rounded-[1.5rem] object-contain"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#315A72]/15 bg-white p-4 shadow-lg">
            <p className="text-sm font-semibold text-stone-900">
              Atención profesional
            </p>

            <p className="mt-0.5 text-xs text-[#315A72]">
              Higiene y bioseguridad
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero