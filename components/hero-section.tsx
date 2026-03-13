import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 bg-primary">
      <div className="absolute inset-0 bg-[url('/modern-office-building-corporate-blue-tint.jpg')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
            Transformamos tu negocio con soluciones estratégicas
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
            Somos una consultora comprometida con el éxito de tu empresa. Ofrecemos productos y soluciones innovadoras
            para impulsar tu crecimiento.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link href="/productos">
                Conoce nuestros servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
