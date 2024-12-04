import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";
import { NavLink, redirect } from "react-router-dom";
import ModalCreateUser from "./Modals/ModalCreateUser";
import { createUser } from "./utils";

function Users() {
  const [modal, setModal] = useState(false);

  return (
    <div className="px-10 py-10">
      <ModalCreateUser modal={modal} setModal={setModal} />
      <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">ORGANIZACIÓN</h2>
      </div>
      <div className="flex justify-between pt-8">
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Gestión de Usuarios
        </span>
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type={"button"}
                className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
              >
                <IonIcon icon={add} className="h-4 w-4" />
                <span className="text-xs font-medium">Nuevo</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <NavLink className="w-full" onClick={() => setModal(true)}>
                  Usuarios
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Users;

export async function action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "create-user":
      await createUser(data);
      return redirect("/users");
      break;

    case "edit-area":
      await editArea(data);
      return redirect("/organization");
      break;
  }

  return redirect("/organization");
}
