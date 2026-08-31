function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Marca */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">
              Podología y Curaciones
            </h2>

            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8FB2C6]">
              Especializadas
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">
              Atención podológica profesional a domicilio, con experiencia
              clínica y compromiso con la bioseguridad.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-white">
              Navegación
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="#inicio"
                className="transition hover:text-[#8FB2C6]"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="transition hover:text-[#8FB2C6]"
              >
                Servicios
              </a>

              <a
                href="#nosotros"
                className="transition hover:text-[#8FB2C6]"
              >
                Nosotros
              </a>

              <a
                href="#zonas"
                className="transition hover:text-[#8FB2C6]"
              >
                Zonas de atención
              </a>

              <a
                href="#contacto"
                className="transition hover:text-[#8FB2C6]"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-white">
              Atención
            </h3>

            <div className="mt-4 space-y-3 text-sm text-stone-400">
              <p>📍 Chorrillos</p>
              <p>📍 Surco</p>
              <p>📍 Miraflores</p>
              <p>📍 San Isidro</p>

              <a
                href="https://wa.me/51910632406?text=Hola%2C%20vi%20su%20p%C3%A1gina%20web%20de%20Podolog%C3%ADa%20y%20Curaciones%20Especializadas%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-[#8FB2C6] transition hover:text-white"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-stone-800 pt-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Podología y Curaciones Especializadas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer