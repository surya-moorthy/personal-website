"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Menu } from "./ui/navbar-menu";
import Link from "next/link";

export const Navbar = () =>{
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Menu setActive={setActive}>
      <nav className="flex justify-center items-center space-x-4 dark:text-white text-black text-2xl font-serif font-extralight h-4 w-1/5">
        <div className="flex space-x-6">
          <Link href="#personal" className="hover:text-white">Personal</Link>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#blog" className="hover:text-white">Blog</Link>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-amber-50 dark:bg-stone-800 dark:hover:bg-zinc-700 rounded-full hover:bg-gray-400"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </Menu>
  );
};
