import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


export function MainContent({ children, className, ...props }: ComponentProps<"main">) {
    return (
        <main className={twMerge("relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto", className)}{...props}>
            {children}
        </main >
    )
}