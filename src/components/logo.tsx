import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import logo from "../assets/brand/logo.svg"

export function Logo({ className, ...props }: ComponentProps<"div">) {
    return (
        <div className={twMerge("py-4 px-6 bg-gray-600 rounded-br-xl", className)} {...props}>
            <img src={logo} alt="Logotipo" className="fill-yellow" />
        </div>
    )
}