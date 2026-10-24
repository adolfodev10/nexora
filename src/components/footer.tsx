import { ShieldCheck, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import CurrentYear from "@/components/current-year";

export default function Footer() {
  const socials = [
    { Icon: FaInstagram, href: "#" },
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
    { Icon: FaWhatsapp, href: "https://wa.me/244900000000" },
    { Icon: Mail, href: "mailto:contacto@nexora.ao" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              Nexora<span className="text-cyan-600">.</span>
            </span>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Segurança eletrónica, CCTV, IoT e soluções digitais em Angola.
            Protegemos pessoas, empresas e patrimónios com tecnologia de ponta.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Rede social ${i + 1}`}
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm text-slate-900">Serviços</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>CCTV & Videovigilância</li>
            <li>Controlo de Acesso</li>
            <li>Alarmes</li>
            <li>IoT & Automação</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm text-slate-900">Empresa</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Sobre nós</li>
            <li>Processo</li>
            <li>Clientes</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-500">
        <p>© <CurrentYear /> Nexora, LDA. Todos os direitos reservados.</p>
        <p>Cazenga, Luanda — Angola</p>
      </div>
    </footer>
  );
}