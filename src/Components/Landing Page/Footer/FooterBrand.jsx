import React from "react";
import Logo from "../Navbar/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const FooterBrand = () => {
  return (
    <div className="space-y-6">
      <Logo color="white" />

      <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
        HexaHaven is a modern & next generation social platform designed for real connections, instant sharing, and beautiful conversations.
      </p>

      <div className="flex items-center gap-5">
        <a className="hover:text-blue-400 transition" href="#">
          <Github size={20} />
        </a>
        <a className="hover:text-blue-400 transition" href="#">
          <Twitter size={20} />
        </a>
        <a className="hover:text-blue-400 transition" href="#">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;