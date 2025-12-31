import { whyChooseContent } from "@/constants";
import Image from "next/image";
import { MoveRight } from "lucide-react";
const WhyChooseSection = () => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center mt-4">
      <div className="w-full">
        <h2 className="text-xl md:text-4xl font-extrabold text-center">
          Why you choose this application
        </h2>
      </div>

      <div
        className="
    flex w-full gap-6 mt-6 md:mt-10
    overflow-x-auto flex-nowrap
    snap-x snap-mandatory scroll-smooth
    md:overflow-visible md:justify-between
    scrollbar-hide
  "
      >
        {whyChooseContent.map((item) => (
          <div
            key={item.id}
            className="
         min-w-full flex flex-col items-center text-center
      snap-center
      md:min-w-0
        "
          >
            <Image src={item.image} alt="why-choose" width={100} height={100} />
            <h2 className="mt-2 font-semibold">{item.title}</h2>
            <p>{item?.desc}</p>
            <button
              className="
    group flex items-center gap-2 mt-4
    text-(--theme-color) font-bold capitalize cursor-pointer
  "
            >
              {item?.buttonTitle}

              <MoveRight
                className="
      transition-transform duration-300 ease-out
      group-hover:translate-x-2
      group-hover:animate-none
    "
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;
