"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    name: "João Mendes",
    role: "Gerente, Supermercado Kianda",
    text: "Instalaram CCTV em todas as lojas. O suporte é rápido e a qualidade das imagens é excelente.",
  },
  {
    name: "Ana Silva",
    role: "Diretora, Colégio Horizonte",
    text: "Controlo de acesso biométrico e videovigilância em todas as salas. Profissionalismo do início ao fim.",
  },
  {
    name: "Carlos Bumba",
    role: "Proprietário, Residencial Talatona",
    text: "Sistema de alarmes e videoporteiro funcionam perfeitamente. Recomendo a Nexora sem hesitar.",
  },
];

export default function Testimonials() {
  return (
    <section id="clientes" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Clientes que <span className="text-gradient">confiam</span> na Nexora
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-cyan-400/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}