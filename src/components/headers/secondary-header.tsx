import { ReactNode } from "react";

export const SecondaryHeader = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <h3>
            {children}
        </h3>
    )
}