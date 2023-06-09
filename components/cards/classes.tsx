import Primary from "../links/primary";
import Image from "../ui/image";

interface iClassesCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  imgPosition?: string;
}

export default function Classes({
  title,
  description,
  image,
  alt,
  link,
  imgPosition,
}: iClassesCardProps) {
  return (
    <div className="w-full rounded-[30px] pt-47 relative overflow-hidden flex flex-col justify-end mb-27">
      <Image
        src={image}
        alt={alt}
        className="absolute top-0 left-0 z-0 w-full h-full"
        imgPosition={imgPosition}
        cover
      />
      <div className="relative flex flex-col items-center w-full pt-8 h-1/2 bg-tertiary/75 z-1">
        <h3 className="mt-8 text-2xl font-bold text-center text-white uppercase font-montserrat">
          {title}
        </h3>
        <p className="mt-4 mb-6 text-base font-normal text-center text-white font-montserrat">
          {description}
        </p>
        <div className="h-25 w-[185px] mx-auto mb-14">
          <Primary href={link}>
            <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
              learn more
            </span>
          </Primary>
        </div>
      </div>
    </div>
  );
}
