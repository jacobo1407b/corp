import { Header } from "@/components/header"
import { ContactoSection } from "@/components/contacto-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contacto | ConsultPro",
  description: "Ponte en contacto con nosotros para una consulta gratuita sobre tus necesidades empresariales.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactoSection />
      </div>
      <Footer />
    </main>
  )
}
