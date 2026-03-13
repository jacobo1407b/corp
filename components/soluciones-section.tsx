import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"

export function SolucionesSection() {
  const soluciones = [
    {
      title: "Transformación Digital",
      description: "Implementamos tecnologías que modernizan tus operaciones y mejoran la experiencia del cliente.",
      benefits: ["Digitalización de procesos", "Integración de sistemas", "Análisis de datos"],
      image: "/digital-transformation-technology-blue.jpg",
    },
    {
      title: "Desarrollo Organizacional",
      description: "Fortalecemos la estructura y cultura de tu organización para un rendimiento óptimo.",
      benefits: ["Diseño organizacional", "Desarrollo de liderazgo", "Cultura corporativa"],
      image: "/business-team-meeting-corporate-blue.jpg",
    },
    {
      title: "Estrategia Comercial",
      description: "Diseñamos estrategias de mercado que incrementan tu competitividad y ventas.",
      benefits: ["Posicionamiento de marca", "Estrategia de ventas", "Expansión de mercado"],
      image: "/business-strategy-growth-chart-blue.jpg",
    },
  ]

  return (
    <section id="soluciones" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Soluciones</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Soluciones integrales para tu empresa
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Abordamos los desafíos más complejos con enfoques estratégicos y personalizados
          </p>
        </div>

        <div className="space-y-16">
          {soluciones.map((solucion, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={solucion.image || "/placeholder.svg"}
                    alt={solucion.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{solucion.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solucion.description}</p>
                <ul className="space-y-3 mb-8">
                  {solucion.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar información
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
