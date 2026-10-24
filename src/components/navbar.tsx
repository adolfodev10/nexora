"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cctv } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Cctv className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-slate-900">
            Nexora<span className="text-cyan-600">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contacto">Pedir Orçamento</a>
          </Button>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700 hover:text-cyan-600 py-2 font-medium"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full">
            <a href="#contacto" onClick={() => setOpen(false)}>Pedir Orçamento</a>
          </Button>
        </div>
      )}
    </header>
  );
}