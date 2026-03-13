import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Aviso de Privacidad | ConsultPro",
  description: "Aviso de privacidad y protección de datos personales de ConsultPro.",
}

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Aviso de Privacidad</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Protección de tus datos personales</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del Tratamiento de Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ConsultPro, con domicilio en Av. Principal 123, Ciudad, País, es responsable del tratamiento de sus
                  datos personales. Puede contactarnos a través del correo electrónico info@consultpro.com o al teléfono
                  +1 (555) 123-4567.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Datos Personales Recabados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar los siguientes
                  datos personales:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Nombre de la empresa</li>
                  <li>Cargo o puesto</li>
                  <li>Información relacionada con sus consultas o solicitudes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidades del Tratamiento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sus datos personales serán utilizados para las siguientes finalidades:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Responder a sus solicitudes de información sobre nuestros servicios</li>
                  <li>Elaborar propuestas comerciales y cotizaciones</li>
                  <li>Establecer comunicación relacionada con nuestros servicios de consultoría</li>
                  <li>Enviar información relevante sobre nuestros productos y soluciones</li>
                  <li>Cumplir con obligaciones contractuales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Transferencia de Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ConsultPro se compromete a no transferir sus datos personales a terceros sin su consentimiento previo,
                  salvo las excepciones previstas en la legislación aplicable. Sus datos se mantendrán confidenciales y
                  serán tratados únicamente por personal autorizado de nuestra empresa.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Derechos ARCO</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales
                  (Derechos ARCO). Para ejercer estos derechos, puede enviar una solicitud al correo electrónico
                  privacidad@consultpro.com, indicando su nombre completo, el derecho que desea ejercer y una
                  descripción clara de los datos respecto de los cuales busca ejercer alguno de estos derechos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Uso de Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro sitio web puede utilizar cookies y otras tecnologías de seguimiento para mejorar su
                  experiencia de navegación. Estas cookies nos permiten recordar sus preferencias y analizar el tráfico
                  del sitio. Puede configurar su navegador para rechazar las cookies si lo prefiere.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificaciones al Aviso de Privacidad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Cualquier cambio
                  será publicado en esta página y, en caso de ser significativo, se lo notificaremos a través de los
                  medios de contacto que nos haya proporcionado.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">Última actualización: Enero 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
