"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden border border-cyan-400/20 p-12 md:p-16 text-center bg-linear-to-br from-cyan-50 via-blue-50 to-indigo-50 shadow-xl shadow-cyan-500/50"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                    <h2 className="relative text-3xl md:text-5xl font-bold tracking-tight">
                        Pronto para <span className="text-gradient">proteger</span> o seu negócio?
                    </h2>
                    <p className="relative mt-4 text-slate-300 max-w-2xl mx-auto">
                        Fale com nossos especialistas e receba um projeto personalizado em até 24 horas.
                    </p>
                    <div className="relative mt-8 flex flex-wrap gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold group"
                        >
                            <a href="#contacto">
                                Solicitar orçamento grátis
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/20 hover:bg-white/5"
                        >
                            <a href="https://wa.me/244900000000" target="_blank" rel="noreferrer">
                                Falar no WhatsApp
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}