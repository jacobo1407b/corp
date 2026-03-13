import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MisionVisionValores() {
  const valores = [
    { icon: Heart, title: "Compromiso", description: "Dedicación total con cada proyecto y cliente" },
    { icon: Users, title: "Colaboración", description: "Trabajamos juntos para alcanzar objetivos comunes" },
    { icon: Lightbulb, title: "Innovación", description: "Buscamos constantemente nuevas soluciones" },
    { icon: Shield, title: "Integridad", description: "Actuamos con ética y transparencia siempre" },
  ]

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quiénes Somos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Nuestra filosofía empresarial
          </h2>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-muted border-none">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluciones empresariales integrales que impulsen el crecimiento sostenible de nuestros
                clientes, combinando experiencia, innovación y un profundo compromiso con la excelencia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-none">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Nuestra Visión</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser reconocidos como la consultora líder en transformación empresarial, destacando por nuestra capacidad
                de generar valor tangible y relaciones duraderas con cada organización que acompañamos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">Nuestros Valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{valor.title}</h4>
                  <p className="text-muted-foreground text-sm">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
