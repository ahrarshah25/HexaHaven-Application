import React, { useState, useEffect } from "react";
import { Menu, X, LogIn, UserPlus } from "lucide-react";

import Logo from "./Logo";
import Tabs from "./Tabs";
import Button from "./Button";
import checkUser from "../../../utils/checkUser";
import { auth, signOut } from "../../../Config/firebase";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await checkUser();
      setUser(currentUser || false);
    };
    fetchUser();
  }, []);

  const userSignout = async () => {
    await signOut(auth)
  }

  const renderButtons = () => {
    if (user === null) return null;
    if (!user) {
      return (
        <div className="flex gap-2">
          <Button icon={LogIn} name="Login" func={() => { window.location.href = "/login" }} variant="outline" />
          <Button icon={UserPlus} func={() => { window.location.href = "/signup" }} name="Sign Up" />
        </div>
      );
    } else {
      return (
        <div className="flex gap-2">
          <Button icon={LogIn} name="Dashboard" func={() => { window.location.href = "/dashboard" }} variant="outline" />
          <Button icon={LogIn} name="Logout" func={userSignout} />
        </div>
      );
    }
  };
  return (
    <div className="sticky top-0 z-[999]">
      <nav className="w-full bg-white border-b shadow-sm relative z-[999]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />

          <div className="hidden md:block">
            <Tabs />
          </div>

          <div className="hidden md:flex items-center gap-3">
            {renderButtons()}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[998] bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-[999] h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <Logo />
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="p-6">
          <Tabs mobile />
        </div>

        <div className="px-6 flex flex-col gap-3">
          {renderButtons()}
        </div>
      </aside>
    </div>
  );
};

export default Navbar;