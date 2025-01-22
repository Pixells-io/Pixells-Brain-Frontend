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
  const [userInfo, setUserInfo] = useState([]);
  const [userId, setUserId] = useState(0);

  function openModalEdit(user) {
    setUserInfo(user);
    setModal(true);
  }

  function openModalDestroy(id) {
    setUserId(id);
    setModalDestroy(true);
  }

  const columns = [
    columnHelper.accessor((row) => `${row?.name}`, {
      id: "name",
      accessorKey: "name",
      header: "NOMBRE",
    }),
    columnHelper.accessor((row) => `${row?.role}`, {
      id: "role",
      accessorKey: "role",
      header: "TIPO",
    }),
    columnHelper.accessor((row) => `${row?.seller_code}`, {
      id: "seller_code",
      accessorKey: "seller_code",
      header: "Codigo",
    }),
    columnHelper.accessor((row) => `${row?.email}`, {
      id: "email",
      accessorKey: "email",
      header: "Email",
    }),
    {
      accessorKey: "actions",
      header: "ACCIONES",
      id: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 text-[#696974]">
            <IonIcon
              icon={informationCircleOutline}
              className="h-5 w-5"
              onClick={() => openModalEdit(row.original)}
            ></IonIcon>
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
      <ModalShowUser user={userInfo} modal={modal} setModal={setModal} />
      <ModalDestroyUser
        id={userId}
        modal={modalDestroy}
        setModal={setModalDestroy}
      />
      <DataTable data={data} columns={columns} searchNameFilter={"Search"} />
    </div>
  );
}

export default UsersTable;
