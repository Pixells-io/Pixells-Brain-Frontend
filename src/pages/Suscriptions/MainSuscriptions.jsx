import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SuscriptionsTable from "./Tables/SuscriptionsTable";

function MainSuscriptions() {
  const { data } = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState(data?.suscriptions_all);

  useEffect(() => {
    const filteredData = tableData.filter((item) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        item.code?.toString().toLowerCase().includes(searchLower) ||
        item.name?.toString().toLowerCase().includes(searchLower) ||
        item.status?.toString().toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="h-screen overflow-y-auto px-10 py-10">
      <div className="flex justify-between pt-4">
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Gestión de Suscripciones
        </span>
      </div>
      <div className="flex justify-between gap-4 pt-6">
        {data?.client_code != 0 ? (
          <div className="w-1/4 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
            <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
              Codigo
            </h2>
            <h2 className="truncate py-4 font-poppins text-[14px] font-medium text-[#44444F]">
              {data?.client_code}
            </h2>
          </div>
        ) : null}
        {data?.client_code != 0 ? (
          <div className="w-1/4 max-w-48 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
            <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
              Enlace
            </h2>
            <h2
              className="mt-4 cursor-pointer truncate font-poppins text-[14px] font-medium text-[#44444F]"
              title={`https://yacamba.com/checkout?code=${data?.client_code}`}
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://yacamba.com/checkout?code=${data?.client_code}`,
                );
              }}
            >
              https://yacamba.com/checkout?code={data?.client_code}
            </h2>
          </div>
        ) : null}
        {data?.client_code == 0 ? (
          <div className="w-1/4 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
            <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
              Gratuitas
            </h2>
            <h2 className="truncate py-4 font-poppins text-[14px] font-medium text-[#44444F]">
              {data?.suscriptions_free}
            </h2>
          </div>
        ) : null}
        <div className="w-1/4 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
          <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
            Activas
          </h2>
          <h2 className="truncate py-4 font-poppins text-[14px] font-medium text-[#44444F]">
            {data?.suscriptions_active}
          </h2>
        </div>
        <div className="w-1/4 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
          <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
            Pago Pendiente
          </h2>
          <h2 className="truncate py-4 font-poppins text-[14px] font-medium text-[#44444F]">
            {data?.suscriptions_pending_payment}
          </h2>
        </div>
        <div className="w-1/4 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
          <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
            Canceladas
          </h2>
          <h2 className="truncate py-4 font-poppins text-[14px] font-medium text-[#44444F]">
            {data?.suscriptions_canceled}
          </h2>
        </div>
        {data?.client_code != 0 ? (
          <div className="w-1/4 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
            <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
              Comision Mensual
            </h2>
            <h2 className="truncate py-4 font-poppins text-[14px] font-medium text-[#44444F]">
              {data?.comision_total}
            </h2>
          </div>
        ) : (
          <div className="w-1/4 rounded-lg border border-slate-400 px-4 py-4 text-center hover:bg-slate-100">
            <h2 className="font-poppins text-[14px] font-bold text-[#44444F]">
              Total
            </h2>
            <h2 className="truncate py-4 font-poppins text-[14px] font-medium text-[#44444F]">
              {data?.total_ammount}
            </h2>
          </div>
        )}
      </div>
      <div>
        <SuscriptionsTable suscriptions={data?.suscriptions_all} />
      </div>
    </div>
  );
}

export default MainSuscriptions;
