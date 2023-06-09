import { Quote } from "@/icons";
import Image from "../ui/image";

interface ReviewProps {
  review: string;
  name: string;
  description: string;
  image: string;
}

export default function Review({
  review,
  name,
  description,
  image,
}: ReviewProps) {
  return (
    <div className="embla_slide flex-[0_0_100%] min-w-0 w-full rounded-[15px] relative overflow-hidden flex flex-col mb-19 pt-16 pb-25 px-15 bg-white font-montserrat text-base font-medium">
      <div className="absolute w-6 h-6 rounded-full bg-primary-text top-6 left-6"></div>
      <div className="absolute w-6 h-6 rounded-full bg-primary-text top-6 right-6"></div>
      <div className="absolute w-6 h-6 rounded-full bg-primary-text bottom-6 left-6"></div>
      <div className="absolute w-6 h-6 rounded-full bg-primary-text bottom-6 right-6"></div>

      <Quote className="w-auto mb-8 h-18 top-6 left-6 fill-primary-text " />

      <p className="mb-8 leading-6 text-center text-primary-text ">{review}</p>

      <div className="flex justify-center w-full">
        <div className="relative mr-6 overflow-hidden rounded-full h-26 w-26">
          <Image src={image} alt={name} cover />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-1 font-semibold leading-5">{name}</p>
          <p className=" leading-[18px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
