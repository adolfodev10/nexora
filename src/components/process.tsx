"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Visitamos o local e identificamos as necessidades reais de segurança." },
  { n: "02", title: "Proposta", desc: "Apresentamos um projeto técnico personalizado com orçamento transparente." },
  { n: "03", title: "Instalação", desc: "Equipa certificada instala os equipamentos com rigor e limpeza." },
  { n: "04", title: "Suporte", desc: "Acompanhamento contínuo, manutenção e suporte técnico 24/7." },
];

export default function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32 px-6 bg-white/2 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Como Trabalhamos
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Um processo <span className="text-gradient">simples</span> e eficaz
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-400/30 flex items-center justify-center mb-5 relative z-10">
                <span className="text-cyan-400 font-bold text-lg">{s.n}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}