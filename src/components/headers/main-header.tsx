import { Send_Flowers } from "next/font/google";
import { ReactNode } from "react";

const font = Send_Flowers({ subsets: ["latin"], weight: '400' });

export const MainHeader = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <h2 className={font.className}>
            {children}
        </h2>
    )
}