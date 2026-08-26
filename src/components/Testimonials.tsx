const testimonials = [
  {
    name: 'María R.',
    text: 'Excelente atención y mucha paciencia. Me gustó especialmente el cuidado con la higiene y el instrumental.',
    service: 'Atención podológica',
  },
  {
    name: 'Carlos M.',
    text: 'La atención a domicilio fue muy cómoda. Todo fue explicado de manera clara y profesional.',
    service: 'Profilaxis podológica',
  },
  {
    name: 'Patricia G.',
    text: 'Muy buena experiencia. La atención fue cuidadosa y me dio mucha tranquilidad el protocolo de bioseguridad.',
    service: 'Cuidado podológico',
  },
]

function Testimonials() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#315A72]">
            Experiencias
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            La confianza también se construye con experiencias
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Cada atención busca brindar tranquilidad, profesionalismo y un
            cuidado personalizado.
          </p>
        </div>

        {/* Testimonios */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315A72]/20 hover:shadow-lg"
            >

              {/* Comilla */}
              <div className="absolute right-7 top-5 text-5xl font-serif leading-none text-[#315A72]/10">
                “
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 text-amber-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Texto */}
              <p className="relative mt-5 leading-relaxed text-stone-600">
                “{testimonial.text}”
              </p>

              {/* Cliente */}
              <div className="mt-6 border-t border-stone-100 pt-5">
                <p className="font-bold text-stone-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-stone-500">
                  {testimonial.service}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials