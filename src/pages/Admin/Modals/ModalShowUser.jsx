import React, { useEffect, useState } from "react";

import { Form } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import { create } from "ionicons/icons";

function ModalShowUser({ modal, setModal, user }) {
  const [disabled, setDisabled] = useState(true);
  const [type, setType] = useState(1);

  useEffect(() => {
    if (user?.role === "Admin") {
      setType(1);
    } else {
      setType(2);
    }
  }, [modal, user]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Editar Usuario
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-4 px-6"
          action="/users"
          method="POST"
        >
          <div className="flex">
            <input type="hidden" name="action" value={"edit-user"} />
            <input type="hidden" name="user_id" value={user.id} />
            <Input
              placeholder="Nombre"
              name="name"
              type="text"
              defaultValue={user.name}
              disabled={disabled}
            />
            <Button
              className="w-16"
              variant="ghost"
              onClick={() => setDisabled(!disabled)}
              type="button"
            >
              <IonIcon
                icon={create}
                size="large"
                className="text-grisText"
              ></IonIcon>
            </Button>
          </div>
          <Input
            placeholder="Correo Electronico"
            name="email"
            type="email"
            defaultValue={user.email}
            disabled={disabled}
          />
          <Input
            placeholder="***********"
            name="password"
            type="password"
            disabled={disabled}
          />
          <select
            name="role"
            value={type}
            disabled={disabled}
            onChange={(e) => setType(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="1">Administrador</option>
            <option value="2">Vendedor</option>
          </select>
          {type == 2 && (
            <Input
              placeholder="Codigo de Vendedor"
              name="seller_code"
              disabled={disabled}
              defaultValue={user.seller_code}
              type="text"
              required
            />
          )}
          <DialogFooter className="px-10 pb-6">
            {disabled == false ? (
              <Button
                type="submit"
                className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
              >
                Guardar
              </Button>
            ) : null}
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalShowUser;
