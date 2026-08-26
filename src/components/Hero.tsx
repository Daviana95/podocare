function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f4f1e8]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* Texto */}
        <div className="max-w-xl">
          <span className="mb-5 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
            ATENCIÓN PODOLÓGICA PROFESIONAL A DOMICILIO
          </span>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-6xl">
            Podología profesional,
            <span className="text-emerald-700">
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
            <span className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700">
              ✓ 15 años de experiencia
            </span>

            <span className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700">
              ✓ Podología Clínica
            </span>

            <span className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700">
              ✓ Bioseguridad
            </span>
          </div>

          {/* Botones */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/51910632406?text=Hola%20PodoCare%2C%20quiero%20agendar%20una%20atenci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:bg-emerald-700"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-center font-semibold text-stone-700 transition hover:bg-stone-100"
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
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border-2 border-[#315A72]/30 bg-[#F4F1E8] p-3 shadow-xl">
            <img
              src="/podocare-hero.jpg"
              alt="Especialista de PodoCare realizando atención podológica"
              className="h-[500px] w-full object-contain"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-lg">
            <p className="text-sm font-semibold text-stone-900">
              Atención profesional
            </p>

            <p className="mt-1 text-xs text-stone-500">
              Higiene y bioseguridad
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero