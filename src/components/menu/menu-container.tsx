import { MainHeader } from "../headers/main-header"
import { MenuHeader } from "./menu-header"

export const MenuContainer = () => {
    return (
        <div className="border-2 border-jd-main flex flex-col items-center m-10 lg:mx-28">
            <MenuHeader />
            <MainHeader>
                <div>
                    Appetizers
                </div>
                <div className="text-center">$9</div>
            </MainHeader>
            <MainHeader>
                <div>
                    Mains
                </div>
                <div className="text-center">$17</div>
            </MainHeader>
            <MainHeader>
                <div>
                    Drinks
                </div>
                <div className="text-center">$16</div>
            </MainHeader>
        </div>
    )
}