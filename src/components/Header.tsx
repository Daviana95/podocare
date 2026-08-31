import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        
        {/* Logo */}
        <a href="#inicio" className="group">
          <div className="leading-tight">
            <p className="font-serif text-lg font-bold tracking-tight text-[#315A72] sm:text-xl md:text-2xl">
              Podología y Curaciones
            </p>

            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500 sm:text-[11px]">
              Especializadas
            </p>
          </div>
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#inicio"
            className="text-sm font-medium text-stone-600 transition hover:text-[#315A72]"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-sm font-medium text-stone-600 transition hover:text-[#315A72]"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="text-sm font-medium text-stone-600 transition hover:text-[#315A72]"
          >
            Nosotros
          </a>

          <a
            href="#zonas"
            className="text-sm font-medium text-stone-600 transition hover:text-[#315A72]"
          >
            Zonas
          </a>

          <a
            href="#contacto"
            className="text-sm font-medium text-stone-600 transition hover:text-[#315A72]"
          >
            Contacto
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#315A72] transition hover:bg-stone-100 md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Reservar escritorio */}
        <a
          href="https://wa.me/51910632406?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20agendar%20una%20atenci%C3%B3n%20de%20Podolog%C3%ADa%20y%20Curaciones%20Especializadas."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#315A72] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#27485C] hover:shadow-md md:inline-flex"
        >
          Reservar
        </a>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-b border-stone-200 bg-white px-5 py-5 shadow-lg md:hidden">
            <nav className="flex flex-col gap-2">
              
              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-stone-700 transition hover:bg-stone-50 hover:text-[#315A72]"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-stone-700 transition hover:bg-stone-50 hover:text-[#315A72]"
              >
                Servicios
              </a>

              <a
                href="#nosotros"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-stone-700 transition hover:bg-stone-50 hover:text-[#315A72]"
              >
                Nosotros
              </a>

              <a
                href="#zonas"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-stone-700 transition hover:bg-stone-50 hover:text-[#315A72]"
              >
                Zonas
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-stone-700 transition hover:bg-stone-50 hover:text-[#315A72]"
              >
                Contacto
              </a>

              <a
                href="https://wa.me/51910632406?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20agendar%20una%20atenci%C3%B3n%20de%20Podolog%C3%ADa%20y%20Curaciones%20Especializadas."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#315A72] px-5 py-3 text-center font-semibold text-white shadow-md transition hover:bg-[#27485C]"
              >
                Reservar por WhatsApp
              </a>

            </nav>
          </div>
        )}

      </div>
    </header>
  )
}

export default Header