import { footerAboutUs, ourInformation } from "@/constants";
import { Mail, Map, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap w-full mt-4 p-5 gap-8">
      {/* Section 1 */}
      <div className="flex-1 min-w-50">
        <div className="text-xl sm:text-2xl font-extrabold tracking-normal md:tracking-wide leading-snug md:leading-relaxed">
          <span className="text-(--theme-color) text-4xl">F</span>in
          <span className="text-(--theme-color) text-4xl">T</span>rack
        </div>
        <p className="text-md mt-2 font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet.
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex-1 min-w-37.5">
        <h2 className="font-semibold mb-2">About Us</h2>
        <ul className="space-y-1">
          {footerAboutUs.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-(--theme-color) space-y-1 text-sm font-bold"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3 */}
      <div className="flex-1 min-w-37.5">
        <h2 className="font-semibold mb-2">Our Information</h2>
        <ul className="space-y-1 text-sm font-bold">
          {ourInformation?.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-(--theme-color) space-y-1 text-sm font-bold"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Section 4 - Address */}
      <div className="flex-1 min-w-37.5 font-semibold flex flex-col gap-2">
        <h2 className="font-semibold mb-2">Contact Info</h2>
        <p className="flex gap-3">
          <span>
            <Map />
          </span>
          <span>Netherlands, Amsterdam</span>
        </p>
        <p className="flex gap-3">
          <span>
            <Phone />
          </span>
          <span>123-456-7890</span>
        </p>
        <p className="flex gap-3">
          <span>
            <Mail />
          </span>
          <span>g7B2W@example.com</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
