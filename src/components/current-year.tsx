"use client";

import { useEffect, useState } from "react";

export default function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // SSR/prerender → string vazia
  // Após hidratação no cliente → ano atual
  return <>{year ?? ""}</>;
}