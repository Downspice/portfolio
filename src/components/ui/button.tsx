import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-2 border-primary hover:bg-transparent hover:text-primary hover:shadow-[4px_4px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-white border-2 border-destructive hover:bg-transparent hover:text-destructive",
        outline:
          "border-2 border-foreground/30 bg-transparent hover:border-primary hover:text-primary hover:shadow-[4px_4px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-border hover:border-primary hover:text-primary",
        ghost:
          "border-2 border-transparent hover:border-foreground/20 hover:bg-secondary/50",
        link: "text-primary underline-offset-4 hover:underline border-0 normal-case tracking-normal font-medium",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-14 px-8 has-[>svg]:px-6 text-sm",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
