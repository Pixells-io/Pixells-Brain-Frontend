import React from "react";
import "../../../public/main.css";

function DarkBanner() {
  return (
    <div className="overflow-hidden bg-[#080019] py-16 text-center">
      <span className="text-gradient-home-black font-poppins text-4xl text-white">
        CRECE RÁPIDO. OPERA EN GRANDE.
      </span>
      <div className="mt-12 flex w-full justify-center">
        <img src="/img/dark_system.webp" className="rotate-img" width={"60%"} />
      </div>
    </div>
  );
}

export default DarkBanner;
