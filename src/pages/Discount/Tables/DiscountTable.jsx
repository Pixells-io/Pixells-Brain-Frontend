import React, { useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { IonIcon } from "@ionic/react";
import { informationCircleOutline, trashOutline } from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import ModalDestroyDiscount from "../Modals/ModalDestroyDiscount";

function DiscountTable({ discounts }) {
  const columnHelper = createColumnHelper();
  const [initialData, setInitialData] = useState(discounts);
  const [data, setDataPusher] = useState(initialData);
  const [modalDestroy, setModalDestroy] = useState(null);
  const [userId, setUserId] = useState(false);

  function openModalDestroy(id) {
    setUserId(id);
    setModalDestroy(true);
  }

  const columns = [
    columnHelper.accessor((row) => `${row?.code}`, {
      id: "code",
      accessorKey: "code",
      header: "Codigo",
    }),
    {
      accessorKey: "type",
      header: "Tipo",
      id: "Actions",
      cell: ({ row }) => {
        return (
          <div className="text-[#696974]">
            {row.original.type == 1
              ? "Porcentaje"
              : row.original.type == 2
                ? "Gratuito P."
                : "Gratuito T."}
          </div>
        );
      },
    },
    {
      accessorKey: "duration",
      header: "Duracion",
      id: "duration",
      cell: ({ row }) => {
        return (
          <div className="text-[#696974]">
            {row.original.type == 1 ? "Fechas" : "Permanentemente"}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Estatus",
      id: "status",
      cell: ({ row }) => {
        return (
          <div className="text-[#696974]">
            {row.original.status == 1 ? "Activo" : "Inactivo"}
          </div>
        );
      },
    },
    {
      accessorKey: "actions",
      header: "ACCIONES",
      id: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 text-[#696974]">
            <IonIcon
              icon={trashOutline}
              className="h-5 w-5"
              onClick={() => openModalDestroy(row.original.id)}
            ></IonIcon>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-full w-full overflow-auto">
      <ModalDestroyDiscount modal={modalDestroy} id={userId} />
      <DataTable data={data} columns={columns} searchNameFilter={"Search"} />
    </div>
  );
}

export default DiscountTable;
