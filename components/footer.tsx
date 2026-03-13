import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-primary-foreground">ConsultPro</span>
            </Link>
            <p className="text-blue-100 leading-relaxed">
              Transformamos empresas con soluciones estratégicas innovadoras. Tu éxito es nuestra prioridad.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Certificaciones</h4>
            <div className="flex items-center gap-4">
              {/* ESR Badge */}
              <div
                className="bg-white rounded-lg p-2 flex items-center justify-center"
                title="Empresa Socialmente Responsable"
              >
                <img
                  src="/esr-empresa-socialmente-responsable-logo-badge-gre.jpg"
                  alt="ESR - Empresa Socialmente Responsable"
                  className="h-14 w-auto"
                />
              </div>
              {/* Great Place to Work Badge */}
              <div className="bg-white rounded-lg p-2 flex items-center justify-center" title="Great Place to Work">
                <img
                  src="/great-place-to-work-certified-logo-badge.jpg"
                  alt="Great Place to Work"
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-200 mt-0.5" />
                <span className="text-blue-100">info@consultpro.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-200 mt-0.5" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-200 mt-0.5" />
                <span className="text-blue-100">Av. Principal 123, Ciudad, País</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-6">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              Suscríbete a nuestro newsletter para recibir las últimas novedades.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-400/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm">© 2025 ConsultPro. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/aviso-privacidad" className="text-blue-100 hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
