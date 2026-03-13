import { Header } from "@/components/header"
import { ProductosSection } from "@/components/productos-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Productos | ConsultPro",
  description:
    "Descubre nuestros productos de consultoría: análisis empresarial, plan estratégico, optimización y más.",
}

export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ProductosSection />
      </div>
      <Footer />
    </main>
  )
}
