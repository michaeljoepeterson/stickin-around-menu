import { SecondaryHeader } from "../headers/secondary-header";

export interface MenuItemProps{
    name: string;
    description: string;
    subDescription: string;
    thirdDescription?: string;
}

export const MenuItem = ({
    name,
    description,
    subDescription,
    thirdDescription
}: MenuItemProps) => {
    return (
        <div className="flex flex-col items-center mb-4">
            <SecondaryHeader>
                {name}
            </SecondaryHeader>
            <p className="text-[0.80em] lg:text-lg">
                {description}
            </p>
            <p className="text-[0.80em] lg:text-lg">
                {subDescription}
            </p>
            {thirdDescription ? (
                <p className="text-[0.80em] lg:text-lg">
                    {thirdDescription}
                </p>
            ) : null}
        </div>
    )
}