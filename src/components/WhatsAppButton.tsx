import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51910632406?text=Hola%2C%20vi%20su%20p%C3%A1gina%20web%20de%20Podolog%C3%ADa%20y%20Curaciones%20Especializadas%20y%20me%20gustar%C3%ADa%20agendar%20una%20atenci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp para agendar una atención"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 hover:shadow-2xl"
    >
      <MessageCircle size={25} strokeWidth={2} />
    </a>
  )
}

export default WhatsAppButton