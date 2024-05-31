import Image from "next/image"

export const MenuImage = ({
    src,
    alt
}: {
    src: string;
    alt: string;
}) => {
    return (
        <Image 
            src={src}
            width={381}
            height="0"
            className="w-[8em] md:w-[15em] lg:w-[20em] xl:w-[29em]"
            alt={alt}
        />
    )
}