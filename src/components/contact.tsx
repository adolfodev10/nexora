"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Vamos <span className="text-gradient">conversar</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-md">
            Preencha o formulário e nossa equipa entrará em contacto em até 24 horas úteis.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: "Sede", value: "Cazenga, Luanda — Angola" },
              { icon: Phone, label: "Telefone", value: "+244 900 000 000" },
              { icon: Mail, label: "E-mail", value: "contacto@nexora.ao" },
            ].map((it, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                  <it.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{it.label}</p>
                  <p className="font-medium">{it.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Input required placeholder="Nome completo" className="bg-slate-200 border-slate-200 placeholder:text-slate-400" />
            <Input required type="email" placeholder="E-mail" className="bg-slate-200 border-slate-200 placeholder:text-slate-400" />
          </div>
          <Input required placeholder="Telefone / WhatsApp" className="bg-slate-200 border-slate-200 placeholder:text-slate-400" />
          <Input placeholder="Empresa (opcional)" className="bg-slate-200 border-slate-200 placeholder:text-slate-400" />
          <Textarea
            required
            rows={5}
            placeholder="Descreva sua necessidade (CCTV, controlo de acesso, alarmes, IoT...)"
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 resize-none"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold group"
          >
            {sent ? "Mensagem enviada ✓" : "Enviar mensagem"}
            {!sent && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </Button>
          <p className="text-xs text-slate-500 text-center">
            Ao enviar, concorda com nossa política de privacidade.
          </p>
        </motion.form>
      </div>
    </section>
  );
}