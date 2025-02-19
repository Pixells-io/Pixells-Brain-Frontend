import React, { useState } from "react";

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
  const [type, setType] = useState(1);

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
          <select
            name="role"
            value={type}
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
              type="text"
              required
            />
          )}
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              onClick={() => setModal(false)}
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
