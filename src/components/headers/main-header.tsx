import { Send_Flowers } from "next/font/google";
import { ReactNode } from "react";

const font = Send_Flowers({ subsets: ["latin"], weight: '400' });

export const MainHeader = ({
    children
}: {
    children: ReactNode
}) => {
    const baseClasses = `${font.className} text-2xl lg:text-4xl`
    return (
        <h2 className={baseClasses}>
            {children}
        </h2>
    )
}