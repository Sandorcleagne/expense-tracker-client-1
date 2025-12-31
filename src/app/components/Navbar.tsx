"use client";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import Button from "./Button";
import { navItems } from "@/constants";
import CustomModal from "./CustomModal";
import Login from "./UserAuth/Login";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-background shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mt-4 flex justify-between items-center px-4 md:px-8 py-2">
          <div className="text-xl sm:text-2xl font-extrabold tracking-normal md:tracking-wide leading-snug md:leading-relaxed">
            <span className="text-(--theme-color) text-4xl">F</span>in
            <span className="text-(--theme-color) text-4xl">T</span>rack
          </div>

          <div className="hidden md:flex">
            <ul className="flex gap-6">
              {navItems?.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-(--theme-color) font-semibold tracking-wide"
                >
                  {item?.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>

            <div className="hidden md:flex">
              <Button
                text="Join Now"
                size="md"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </div>
          </div>

          {/* Hamburger menu for mobile */}
          <Menu
            className="w-8 h-8 text-foreground dark:text-accent hover:text-white cursor-pointer transition-colors md:hidden"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <ul className="space-y-4">
          {navItems?.map((item) => (
            <li key={item?.id} className="border-b-2">
              <a href="#" className="hover:text-blue-600">
                {item?.name}
              </a>
            </li>
          ))}

          <li>
            <ThemeToggle />
          </li>
        </ul>
      </Drawer>

      {/* Add spacing so content doesn't go under fixed navbar */}
      <div className="h-20 md:h-24" />
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Login />
      </CustomModal>
    </>
  );
};

export default Navbar;
