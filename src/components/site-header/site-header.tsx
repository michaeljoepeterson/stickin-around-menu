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
                    width="0"
                    height="0"
                    className="w-full lg:w-1/2"
                />
            </div>
            <div className="grid grid-rows-2 grid-cols-1 w-1/3">
                <div></div>
                <div className="bg-jd-main flex">
                    <a
                        className="text-white flex items-center"
                        target="_blank"
                        href="https://www.instagram.com/dianes.place/"
                    >
                        <Image 
                            src="assets/Insta.svg"
                            alt="Diane's Place Logo"
                            width="0"
                            height="0"
                            className="w-1/3"
                        />
                        <span className="lg:text-lg">
                            Follow us on Instagram
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}