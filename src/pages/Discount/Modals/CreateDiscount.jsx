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

function ModalCreateDiscount({ modal, setModal }) {
  const [type, setType] = useState(1);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Crear Descuento
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-4 px-6"
          action="/discounts"
          method="POST"
        >
          <input type="hidden" name="action" value={"create-discount"} />
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="1">Porcentaje de descuento</option>
            <option value="2">Gratuito permanentemente</option>
            <option value="3">Gratuito temporal</option>
          </select>
          {type != 2 && (
            <Input
              placeholder={type == 1 ? "Porcentaje" : "Meses"}
              name="discount"
              type="number"
            />
          )}
          {type == 3 && (
            <div className="flex">
              <Input
                placeholder="Fecha de inicio"
                name="start_date"
                type="date"
              />
              <Input placeholder="Fecha de fin" name="end_date" type="date" />
            </div>
          )}
          <Input placeholder="Codigo" name="code" type="text" required />
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

export default ModalCreateDiscount;
