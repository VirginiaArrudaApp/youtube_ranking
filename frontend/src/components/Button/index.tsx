import { tv, type VariantProps } from "tailwind-variants"
import React from "react"

const button = tv({
  base: "inline-flex items-center justify-center gap-1 uppercase font-medium rounded-2xl transition-colors duration-200 bg-primary text-text hover:bg-primary-light",
  variants: {
    size: {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-6 py-4",
      lg: "text-base px-5 py-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

interface ButtonProps extends VariantProps<typeof button>, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ size, children, className, ...props }: ButtonProps) {
  return (
    <button className={button({ size, class: className })} {...props}>
      {children}
    </button>
  )
}
