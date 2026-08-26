function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Marca */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              PodoCare
            </h2>

            <p className="mt-2 text-sm font-medium text-emerald-400">
              Pies Sanos y Curaciones
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
                className="transition hover:text-white"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="transition hover:text-white"
              >
                Servicios
              </a>

              <a
                href="#nosotros"
                className="transition hover:text-white"
              >
                Nosotros
              </a>

              <a
                href="#zonas"
                className="transition hover:text-white"
              >
                Zonas de atención
              </a>

              <a
                href="#contacto"
                className="transition hover:text-white"
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
                href="https://wa.me/51910632406?text=Hola%20PodoCare%2C%20vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-emerald-400 transition hover:text-emerald-300"
              >
                💬 Escríbenos por WhatsApp
              </a>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-stone-800 pt-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} PodoCare. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer