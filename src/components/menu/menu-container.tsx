import { MainHeader } from "../headers/main-header"
import { SecondaryHeader } from "../headers/secondary-header";
import { MenuHeader } from "./menu-header"
import { MenuImage } from "./menu-image";
import { MenuItem, MenuItemProps } from "./menu-item"
import Image from "next/image"

export const MenuContainer = () => {
    const appetizerItems: MenuItemProps[] = [
        {
            name: "KUEH PIE TEE",
            description: "Crispy pastry shell, shredded veggies, crushed",
            subDescription: "peanuts, chili, garlic, cilantro"
        },
        {
            name: "CHẢ GIÒ",
            description: "Fried springrolls with taro, carrot, jicama,",
            subDescription: "vermicelli, woodear mushrooms"
        },
        {
            name: "ĐẬU HŨ SA TẾ",
            description: "Cold medium tofu, sa tế, chili oil, soy sauce,",
            subDescription: "scallion, fried onion"
        },
    ];

    const mainItems: MenuItemProps[] = [
        {
            name: "BÚN BÌ NƯỚC CỐT DỪA",
            description: "XL vermicelli, springrolls, fresh & pickled veggies,",
            subDescription: "fishless sauce, signature coconut sauce, bi",
            thirdDescription: "(starches tossed with toasted rice powder)"
        },
        {
            name: "NASI LEMAK",
            description: "Coconut rice, cucumber, sambal, crispy fried",
            subDescription: "‘fish’, roasted peanuts, ‘omelette’"
        },
    ];

    return (
        <div className="border-2 border-jd-main flex flex-col items-center m-8 lg:mx-28 p-2 lg:p-0 relative">
            <MenuHeader />
            <div className="absolute left-[-1em] top-[3em] 2xl:left-[8em] lg:left-[-5em] lg:top-5">
                <MenuImage 
                    src="/assets/SpringRoll.png"
                    alt="Spring rolls"
                />
            </div>
            <MainHeader className="mb-3">
                <div>
                    Appetizers
                </div>
                <div className="text-center">$9</div>
            </MainHeader>
            {appetizerItems.map(item => (
                <MenuItem 
                    key={item.name} 
                    name={item.name} 
                    description={item.description} 
                    subDescription={item.subDescription} 
                    thirdDescription={item?.thirdDescription}
                />
            ))}
            <MainHeader className="mt-5 mb-3">
                <div>
                    Mains
                </div>
                <div className="text-center">$17</div>
            </MainHeader>
            <div className="absolute right-[-2em] top-[23em] md:top-[10em] 2xl:right-[8em] lg:right-[-5em] lg:top-[6em]">
                <MenuImage 
                    src="/assets/Rice.png"
                    alt="rice"
                />
            </div>
            {mainItems.map(item => (
                <MenuItem 
                    key={item.name} 
                    name={item.name} 
                    description={item.description} 
                    subDescription={item.subDescription} 
                    thirdDescription={item?.thirdDescription}
                />
            ))}
            <div className="absolute left-[-2em] bottom-[5em] 2xl:left-[8em] lg:left-[-5em] lg:bottom-5">
                <MenuImage 
                    src="/assets/NasiLemak.png"
                    alt="nasi lemak"
                />
            </div>
            <MainHeader className="mt-5">
                <div>
                    Drinks
                </div>
                <div className="text-center">$6</div>
            </MainHeader>
            <SecondaryHeader className="mt-5">
                UBE HORCHATA
            </SecondaryHeader>
            <SecondaryHeader className="my-5">
                VIETNAMESE ICED COFFEE
            </SecondaryHeader>
            <div className="absolute bottom-[3em] right-[-3em] 2xl:right-[5em] lg:right-[-8em] lg:bottom-[-10em]">
                <MenuImage 
                    src="/assets/Coffee.png"
                    alt="coffee"
                />
            </div>
        </div>
    )
}