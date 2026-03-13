import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Settings, TrendingUp, ArrowRight } from "lucide-react"

export function ProductosSection() {
  const productos = [
    {
      icon: BarChart3,
      title: "Análisis Empresarial",
      description:
        "Diagnóstico completo de tu organización para identificar áreas de mejora y oportunidades de crecimiento.",
      features: ["Análisis financiero", "Estudio de mercado", "Benchmarking"],
    },
    {
      icon: FileText,
      title: "Plan Estratégico",
      description: "Desarrollo de planes estratégicos personalizados alineados con tus objetivos de negocio.",
      features: ["Planificación a largo plazo", "KPIs definidos", "Roadmap de implementación"],
    },
    {
      icon: Settings,
      title: "Optimización de Procesos",
      description: "Mejora continua de procesos operativos para maximizar eficiencia y reducir costos.",
      features: ["Mapeo de procesos", "Automatización", "Control de calidad"],
    },
    {
      icon: TrendingUp,
      title: "Gestión del Cambio",
      description: "Acompañamiento integral en la transformación organizacional y cultural de tu empresa.",
      features: ["Capacitación", "Comunicación interna", "Seguimiento continuo"],
    },
  ]

  return (
    <section id="productos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Productos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Nuestros productos de consultoría
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Soluciones diseñadas para impulsar el crecimiento y la eficiencia de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productos.map((producto, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow border border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <producto.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{producto.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{producto.description}</p>
                <ul className="space-y-2 mb-6">
                  {producto.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto">
                  Más información
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
