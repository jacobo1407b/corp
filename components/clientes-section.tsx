import Image from "next/image"

export function ClientesSection() {
  const clientes = [
    { name: "TechCorp", logo: "/client-logo-2.png" },
    { name: "InnovateCo", logo: "/innovation-company-logo-minimal.jpg" },
    { name: "GlobalTrade", logo: "/global-trade-company-logo-minimal.jpg" },
    { name: "FinanceHub", logo: "/client-logo-5.png" },
    { name: "BuildPro", logo: "/construction-company-logo-minimal.jpg" },
    { name: "HealthPlus", logo: "/health-company-logo-minimal.jpg" },
  ]

  return (
    <section id="clientes" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Clientes</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Empresas que confían en nosotros
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hemos tenido el privilegio de trabajar con organizaciones líderes en diversos sectores
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
            >
              <Image
                src={cliente.logo || "/placeholder.svg"}
                alt={cliente.name}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl text-foreground italic text-center leading-relaxed">
            &quot;ConsultPro transformó completamente nuestra estrategia empresarial. Su equipo profesional y dedicado
            nos ayudó a alcanzar resultados que superaron nuestras expectativas.&quot;
          </blockquote>
          <div className="mt-6 text-center">
            <p className="font-semibold text-foreground">María González</p>
            <p className="text-muted-foreground text-sm">CEO, TechCorp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
