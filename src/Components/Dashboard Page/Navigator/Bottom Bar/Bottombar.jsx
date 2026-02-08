import React, { useState } from "react";

import tabs from "../../../../data/Tabs";
import CreateModal from "../../../Create Page/Modal/CreateModal";

const Bottombar = () => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around h-16 lg:hidden">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() =>
              tab.action === "modal"
                ? setShowCreate(true)
                : (window.location.href = tab.href)
            }
            className="flex items-center justify-center text-slate-600 hover:text-blue-600"
          >
            <tab.icon className="w-6 h-6" />
          </button>
        ))}
      </div>

      <CreateModal open={showCreate} onClose={() => setShowCreate(false)} />
    </>
  );
};

export default Bottombar;
