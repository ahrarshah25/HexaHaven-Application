import React, { useEffect, useState } from "react";

import Sidebar from "./Side Bar/Sidebar";
import Bottombar from "./Bottom Bar/Bottombar";

const Navigator = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? <Sidebar /> : <Bottombar />}
    </>
  );
};

export default Navigator;
