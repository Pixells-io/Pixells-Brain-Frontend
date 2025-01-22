import React from "react";
import { Form } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";

function ModalDestroyDiscount({ modal, setModal, id }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="flex max-w-[400px] flex-col gap-4 border-0 bg-[#242424]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon icon={person} className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading text-white">
                  Eliminar Codigo de Descuento
                </h2>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form className="flex flex-col gap-4" action="/discounts" method="POST">
          <input type="text" value={id} name="id" hidden readOnly />
          <input type="hidden" name="action" value={"destroy-discount"} />
          <span className="my-4 font-roboto text-xs font-light text-grisDisabled">
            Estas intentando eliminar un codigo de descuento, ¿Estás Seguro?
          </span>
          <DialogFooter>
            <div className="flex w-full justify-end gap-2">
              <Button
                type="submit"
                onClick={() => setModal(false)}
                className="h-8 w-24 rounded-xl bg-[#DC1C3B] font-roboto text-xs font-normal text-white hover:bg-[#DC1C3B]"
              >
                Eliminar
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDestroyDiscount;
