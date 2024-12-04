import React from "react";
import "../../../public/main.css";

function IntegrationsBanner() {
  return (
    <div className="text-center">
      <span className="font-poppins text-xl font-light text-grisHeading">
        Integraciones mas populares
      </span>
      <div className="mt-10 flex items-center justify-center gap-20">
        <img
          src="/img/meta_logo.webp"
          className="h-auto object-contain"
          alt="Meta Logo"
          width={"124px"}
        />
        <img
          src="/img/google_logo.webp"
          className="h-auto object-contain"
          alt="Meta Logo"
          width={"124px"}
        />
        <img
          src="/img/outlook_logo.webp"
          className="h-auto object-contain"
          alt="Meta Logo"
          width={"70px"}
        />
        <img
          src="/img/shopify_logo.webp"
          className="h-auto object-contain"
          alt="Meta Logo"
          width={"70px"}
        />
      </div>
    </div>
  );
}

export default IntegrationsBanner;
