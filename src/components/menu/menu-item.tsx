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
            <p>
                {description}
            </p>
            <p>
                {subDescription}
            </p>
            {thirdDescription ? (
                <p>
                    {thirdDescription}
                </p>
            ) : null}
        </div>
    )
}