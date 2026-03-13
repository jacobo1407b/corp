import { Header } from "@/components/header"
import { SolucionesSection } from "@/components/soluciones-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Soluciones | ConsultPro",
  description: "Soluciones integrales: transformación digital, desarrollo organizacional y estrategia comercial.",
}

export default function SolucionesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <SolucionesSection />
      </div>
      <Footer />
    </main>
  )
}
