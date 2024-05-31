import Image from "next/image"

export const SiteHeader = () => {
    return (
        <div className="flex justify-evenly mt-5">
            <div className="grid grid-rows-2 grid-cols-1 w-1/3">
                <div className="bg-jd-main"></div>
                <div></div>
            </div>
            <div className="bg-white p-6 w-1/3 flex justify-center py-0">
                <Image 
                    src="assets/Logo.svg"
                    alt="Diane's Place Logo"
                    width={200}
                    height={120}
                />
            </div>
            <div className="grid grid-rows-2 grid-cols-1 w-1/3">
                <div></div>
                <div className="bg-jd-main"></div>
            </div>
        </div>
    )
}