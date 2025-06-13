import { tv, type VariantProps } from "tailwind-variants"

const container = tv({
    base: "mx-auto",
    variants: {
        size: {
            default: "container"
        },
        py: {
            none: "py-0",
            default: "py-10",
        },
        px: {
            default: "px-4 xl:px-6",
        }
    },
    defaultVariants: {
        size: "default",
        py: "default",
        px: "default"
    }
});

interface ContainerProps extends VariantProps<typeof container>, React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, size, py, px, className, ...rest }: ContainerProps) {
    return (
        <div className={container({ size, py, px, class: className })} {...rest}>{children}</div>
    )
}