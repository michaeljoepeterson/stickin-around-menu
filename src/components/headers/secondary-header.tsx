import { ReactNode } from "react";

export const SecondaryHeader = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string
}) => {
    const baseClasses = `font-bold text-xl lg:text-3xl ${className ? className : ''}`
    return (
        <h3 className={baseClasses}>
            {children}
        </h3>
    )
}