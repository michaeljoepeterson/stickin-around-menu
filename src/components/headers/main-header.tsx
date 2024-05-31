import { Send_Flowers } from "next/font/google";
import { ReactNode } from "react";

const font = Send_Flowers({ subsets: ["latin"], weight: '400' });

export const MainHeader = ({
    children,
    className
}: {
    children: ReactNode,
    className?: string;
}) => {
    const baseClasses = `${font.className} text-2xl lg:text-4xl ${className ? className : ''}`
    return (
        <h2 className={baseClasses}>
            {children}
        </h2>
    )
}