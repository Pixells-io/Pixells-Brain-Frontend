import React from "react";

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

function ModalCreateUser({ modal, setModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Crear Usuario
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-4 px-6"
          action="/users"
          method="POST"
        >
          <input type="hidden" name="action" value={"create-user"} />
          <Input placeholder="Nombre" name="name" type="text" required />
          <Input
            placeholder="Correo Electronico"
            name="email"
            type="email"
            required
          />
          <Input
            placeholder="Contraseña"
            name="password"
            type="password"
            required
          />
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Guardar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCreateUser;
