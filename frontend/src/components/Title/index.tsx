import { tv, type VariantProps } from "tailwind-variants"

const title = tv({
    slots: {
        h1: "text-white text-4xl md:text-6xl font-raleway",
        h2: "text-white text-2xl md:text-4xl font-raleway",
        h3: "text-white text-3xl md:text-5xl font-raleway",
        h4: "text-white text-xl 2xl:text-3xl font-raleway",
        h6: "text-white text-base font-semibold"
    }
});

interface TitleProps extends VariantProps<typeof title>, React.HTMLAttributes<HTMLHeadingElement> {
    heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} 

export default function Title({ children, className, heading }: TitleProps) {
    const { h1, h2, h3, h4, h6 } = title();

    switch (heading) {
        case "h1":
            return <h1 className={h1({ class: className })}>{children}</h1>
        case "h2":
            return <h2 className={h2({ class: className })}>{children}</h2>
        case "h3":
            return <h3 className={h3({ class: className })}>{children}</h3>
        case "h4":
            return <h4 className={h4({ class: className })}>{children}</h4>
        case "h5":
            return <h5>{children}</h5>
        case "h6":
            return <h6 className={h6({ class: className })}>{children}</h6>
        default:
            return <p>{children}</p>
    }
}