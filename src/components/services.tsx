"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cctv, Fingerprint, Bell, Cloud, Cpu, GraduationCap, Wifi, MonitorSmartphone
} from "lucide-react";

const services = [
  {
    icon: Cctv,
    title: "Videovigilância CCTV",
    desc: "Instalação e manutenção de sistemas de videovigilância HD/4K com acesso remoto e gravação em nuvem.",
  },
  {
    icon: Fingerprint,
    title: "Controlo de Acesso",
    desc: "Sistemas biométricos, cartões RFID e reconhecimento facial para controle total de entradas.",
  },
  {
    icon: Bell,
    title: "Alarmes & Sensores",
    desc: "Alarmes anti-intrusão, sensores de movimento e videoporteiros com notificações em tempo real.",
  },
  {
    icon: Cloud,
    title: "Computação em Nuvem",
    desc: "Implementação de soluções digitais, backup seguro e infraestrutura cloud escalável.",
  },
  {
    icon: Wifi,
    title: "IoT & Automação",
    desc: "Internet das Coisas, automação predial e integração tecnológica para empresas e residências.",
  },
  {
    icon: GraduationCap,
    title: "Formação & Consultoria",
    desc: "Formação técnica, suporte e consultoria especializada em TI e segurança eletrónica.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Soluções completas de <span className="text-gradient">segurança</span> e tecnologia
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Da instalação à manutenção, oferecemos um ecossistema integrado para proteger
            o que mais importa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full bg-white/3 border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}