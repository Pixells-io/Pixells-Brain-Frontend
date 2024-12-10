import React, { useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { IonIcon } from "@ionic/react";
import { informationCircleOutline, trashOutline } from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import ModalShowUser from "../Modals/ModalShowUser";
import ModalDestroyUser from "../Modals/ModalDestroyUser";

function UsersTable({ users }) {
  const columnHelper = createColumnHelper();
  const [initialData, setInitialData] = useState(users);
  const [data, setDataPusher] = useState(initialData);
  const [modalDestroy, setModalDestroy] = useState(null);
  const [modal, setModal] = useState(false);

  const columns = [
    columnHelper.accessor((row) => `${row?.name}`, {
      id: "name",
      accessorKey: "name",
      header: "NAME",
    }),
    columnHelper.accessor((row) => `${row?.email}`, {
      id: "email",
      accessorKey: "email",
      header: "EMAIL",
    }),
    {
      accessorKey: "actions",
      header: "ACCIONES",
      id: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 text-[#696974]">
            <ModalShowUser
              user={row.original}
              modal={modal}
              setModal={setModal}
            />
            <ModalDestroyUser
              id={row.original?.id}
              modal={modalDestroy}
              setModal={setModalDestroy}
            />
            <IonIcon
              icon={informationCircleOutline}
              className="h-5 w-5"
              onClick={() => setModal(true)}
            ></IonIcon>
            <IonIcon
              icon={trashOutline}
              className="h-5 w-5"
              onClick={() => setModalDestroy(true)}
            ></IonIcon>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-full w-full overflow-auto">
      <DataTable data={data} columns={columns} searchNameFilter={"Search"} />
    </div>
  );
}

export default UsersTable;
