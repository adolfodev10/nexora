"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck, Cctv, Fingerprint, Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden bg-hero-glow">
      {/* 1) Grid decorativo — agora com 80% de opacidade */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-80" />

      {/* 2) Blobs de cor para dar profundidade */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-10 w-105 h-105 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-95 h-95 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-violet-300/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-300 bg-white/80 backdrop-blur text-cyan-700 text-xs font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Tecnologia de segurança em Angola
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
            Tecnologia que <span className="text-gradient">protege</span> o seu negócio
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Instalação de CCTV, controlo de acesso, biometria, alarmes e soluções IoT.
            Segurança eletrónica de ponta para empresas e particulares, com suporte técnico em Luanda.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <a href="#contacto">
                Solicitar orçamento
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">
                <PlayCircle className="mr-2 w-4 h-4" />
                Ver serviços
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-600" />
              Instalação certificada
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-cyan-600" />
              Suporte 24/7
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-slate-200 bg-white/95 backdrop-blur p-6 shadow-2xl shadow-cyan-500/10">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Cctv, label: "CCTV HD", value: "24/7" },
                { icon: Fingerprint, label: "Biometria", value: "Segura" },
                { icon: Wifi, label: "IoT", value: "Conectado" },
                { icon: ShieldCheck, label: "Alarmes", value: "Ativos" },
              ].map((it, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 hover:border-cyan-300 hover:bg-white transition-colors"
                >
                  <it.icon className="w-6 h-6 text-cyan-600 mb-3" />
                  <p className="text-xs text-slate-500">{it.label}</p>
                  <p className="text-lg font-semibold text-slate-900">{it.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-cyan-200 bg-cyan-50 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-cyan-700">Sistema ativo</p>
                <p className="font-semibold text-slate-900">Videovigilância Nexora</p>
              </div>
              <div className="relative w-10 h-10 rounded-full bg-cyan-600 pulse-ring flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-cyan-300/40 blur-2xl animate-float" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-300/40 blur-3xl animate-float" />
        </motion.div>
      </div>
    </section>
  );
}