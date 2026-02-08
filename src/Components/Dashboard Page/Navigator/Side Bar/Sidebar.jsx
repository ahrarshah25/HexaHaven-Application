import React, { useState } from "react";

import { Menu } from "lucide-react";
import tabs from "../../../../data/Tabs";
import Logo from "../../../Landing Page/Navbar/Logo";
import CreateModal from "../../../Create Page/Modal/CreateModal";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <>
      <aside
        className={`
          hidden lg:flex h-screen bg-white border-r border-slate-200
          transition-all duration-300
          ${open ? "w-64" : "w-20"}
        `}
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between px-4 h-16">
            {open && <span className="font-bold text-xl">
              <Logo />
              </span>}
            <button onClick={() => setOpen(!open)}>
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </div>

          <nav className="flex-1 px-2 space-y-1 mt-4">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() =>
                  tab.action === "modal"
                    ? setShowCreate(true)
                    : (window.location.href = tab.href)
                }
                className="
                  w-full flex items-center gap-4 px-4 py-3
                  rounded-xl text-slate-700
                  hover:bg-blue-50 hover:text-blue-600
                  transition
                "
              >
                <tab.icon className="w-6 h-6" />
                {open && <span className="font-medium">{tab.name}</span>}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <CreateModal open={showCreate} onClose={() => setShowCreate(false)} />
    </>
  );
};

export default Sidebar;
