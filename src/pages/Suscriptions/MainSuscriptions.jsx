import React from "react";
import { useLoaderData } from "react-router-dom";
import SuscriptionsTable from "./Tables/SuscriptionsTable";

function MainSuscriptions() {
  const { data } = useLoaderData();

  console.log(data);

  return (
    <div className="px-10 py-10">
      <div className="flex justify-between pt-8">
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Gestión de Suscripciones
        </span>
      </div>
      <div>
        <SuscriptionsTable suscriptions={data} />
      </div>
    </div>
  );
}

export default MainSuscriptions;
