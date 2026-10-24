import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-cyan-500/40 outline-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-600/20",
        outline:
          "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200",
        ghost: "text-slate-700 hover:bg-slate-100",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        link: "text-cyan-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };