import React from "react";

const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">

      <div>
        © 2026 – {new Date().getFullYear()}{" "}
        <a
          href="https://hexahaven.vercel.app/"
          className="font-semibold text-white hover:underline"
        >
          Hexa Haven
        </a>{" "}
        · All rights reserved
      </div>

      <div className="font-semibold text-white">
        Made with ❤️ by{" "}
        <a
          href="https://ahrar-shah.vercel.app"
          className="text-blue-400 hover:underline"
        >
          Ahrar Shah
        </a>
      </div>

    </div>
  );
};

export default FooterBottom;