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
import { NavLink, redirect, useLoaderData } from "react-router-dom";
import DiscountTable from "./Tables/DiscountTable";
import ModalCreateDiscount from "./Modals/CreateDiscount";
import { createDiscount, destroyDiscount } from "./utils";

function Discounts() {
  const [modal, setModal] = useState(false);
  const { data } = useLoaderData();

  return (
    <div className="px-10 py-10">
      <ModalCreateDiscount modal={modal} setModal={setModal} />
      <div className="flex justify-between pt-8">
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Gestión de Descuentos
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
                  Codigo
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <DiscountTable discounts={data} />
      </div>
    </div>
  );
}

export default Discounts;

export async function action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "create-discount":
      await createDiscount(data);
      return redirect("/discounts");
      break;

    case "destroy-discount":
      await destroyDiscount(data);
      return redirect("/discounts");
      break;
  }

  return redirect("/discounts");
}
