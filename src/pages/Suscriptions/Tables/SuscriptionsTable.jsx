import React, { useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { IonIcon } from "@ionic/react";
import { informationCircleOutline, trashOutline } from "ionicons/icons";
import DataTable from "@/components/table/DataTable";

function SuscriptionsTable({ suscriptions }) {
  const columnHelper = createColumnHelper();
  const [initialData, setInitialData] = useState(suscriptions);
  const [data, setDataPusher] = useState(initialData);
  const [modalDestroy, setModalDestroy] = useState(null);
  const [modal, setModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState(suscriptions);

  const filteredData = tableData.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.code?.toString().toLowerCase().includes(searchLower) ||
      item.name?.toString().toLowerCase().includes(searchLower) ||
      item.status?.toString().toLowerCase().includes(searchLower)
    );
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const columns = [
    columnHelper.accessor((row) => `${row?.name}`, {
      id: "name",
      accessorKey: "name",
      header: "NOMBRE",
    }),
    columnHelper.accessor((row) => `${row?.email}`, {
      id: "email",
      accessorKey: "email",
      header: "EMAIL",
    }),
    columnHelper.accessor((row) => `${row?.pay}`, {
      id: "pay",
      accessorKey: "pay",
      header: "ULTIMO PAGO",
    }),
    columnHelper.accessor((row) => `${row?.total}`, {
      id: "total",
      accessorKey: "total",
      header: "TOTAL",
    }),
    {
      accessorKey: "suscription",
      header: "SUSCRIPCION",
      id: "Suscription",
      cell: ({ row }) => {
        return (
          <div>
            {row?.original?.suscription == "1" ? (
              <span className="rounded-full bg-green-100 px-3 py-1 font-roboto text-green-600 hover:bg-green-200">
                Profesional
              </span>
            ) : row?.original?.suscription == "2" ? (
              <span className="rounded-full bg-purple-100 px-3 py-1 font-roboto text-purple-600 hover:bg-purple-200">
                Anual
              </span>
            ) : row?.original?.suscription == "3" ? (
              <span className="rounded-full bg-purple-100 px-3 py-1 font-roboto text-purple-600 hover:bg-purple-200">
                Gratuita
              </span>
            ) : row?.original?.suscription == "4" ? (
              <span className="rounded-full bg-yellow-100 px-3 py-1 font-roboto text-yellow-600 hover:bg-yellow-200">
                Prueba
              </span>
            ) : null}
          </div>
        );
      },
    },
    {
      accessorKey: "STATUS",
      header: "STATUS",
      id: "Status",
      cell: ({ row }) => {
        return (
          <div>
            {row?.original?.status === "1" ? (
              <span className="rounded-full bg-green-100 px-3 py-1 font-roboto text-green-600 hover:bg-green-200">
                Activo
              </span>
            ) : row?.original?.status === "2" ? (
              <span className="rounded-full bg-yellow-100 px-3 py-1 font-roboto text-yellow-600 hover:bg-yellow-200">
                Vencido
              </span>
            ) : (
              <span className="rounded-full bg-red-100 px-3 py-1 font-roboto text-red-600 hover:bg-red-200">
                Cancelado
              </span>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-full w-full overflow-auto">
      <div className="float-end px-4 pt-4">
        <input
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar..."
          className="mb-4 h-10 w-64 rounded-xl border border-gray-300 px-3"
        />
      </div>
      <div className="mt-[-50px]">
        <DataTable
          data={filteredData}
          columns={columns}
          searchNameFilter={"Search"}
        />
      </div>
    </div>
  );
}

export default SuscriptionsTable;
