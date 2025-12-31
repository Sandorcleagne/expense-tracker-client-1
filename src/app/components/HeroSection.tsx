import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-full  flex justify-center items-center">
      <div className="flex justify-center md:justify-between items-center w-full">
        <div className="sm:w-3/6">
          <h1 className="text-5xl mt-2 sm:mt-0 font-extrabold tracking-wide leading-12 md:text-6xl md:leading-16">
            The premier workspace companion for your daily needs.
          </h1>
          <p className="text-left mt-3 text-xl tracking-wide leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            ipsam laudantium qui velit assumenda commodi laboriosam cumque
            laborum perferendis totam.
          </p>
        </div>
        <div className="sm:flex hidden">
          <Image
            src="/images/hero-2.webp"
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
