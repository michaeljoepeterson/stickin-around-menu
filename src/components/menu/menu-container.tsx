import { MainHeader } from "../headers/main-header"
import { MenuHeader } from "./menu-header"

export const MenuContainer = () => {
    return (
        <div className="border-2 border-jd-main flex flex-col items-center">
            <MenuHeader />
            <MainHeader>
                <div>
                    Appetizers
                </div>
            </MainHeader>
        </div>
    )
}