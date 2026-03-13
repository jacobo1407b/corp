import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MisionVisionValores } from "@/components/mision-vision-valores"
import { ClientesSection } from "@/components/clientes-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MisionVisionValores />
      <ClientesSection />
      <Footer />
    </main>
  )
}
