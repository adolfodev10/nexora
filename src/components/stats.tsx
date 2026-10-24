"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Instalações realizadas" },
  { value: 24, suffix: "/7", label: "Suporte técnico" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 15, suffix: "+", label: "Anos de experiência" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-white/2">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-gradient">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}