import DarkBanner from "@/components/BannersLanding/DarkBanner";
import FirstBanner from "@/components/BannersLanding/FirstBanner";
import IntegrationsBanner from "@/components/BannersLanding/IntegrationsBanner";
import ModulesBanner from "@/components/BannersLanding/ModulesBanner";
import SecondBanner from "@/components/BannersLanding/SecondBanner";
import Footer from "@/layouts/Footer";
import React from "react";

function HomePage() {
  return (
    <div>
      <div className="mx-8 my-4">
        <FirstBanner />
      </div>
      <div className="mt-12">
        <SecondBanner />
      </div>
      <div className="py-20">
        <IntegrationsBanner />
      </div>
      <div className="py-10">
        <ModulesBanner />
      </div>
      <div className="pt-10">
        <DarkBanner />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
