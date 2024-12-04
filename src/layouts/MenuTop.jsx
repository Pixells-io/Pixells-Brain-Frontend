import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IonIcon } from "@ionic/react";
import { logOut } from "ionicons/icons";
import { Outlet } from "react-router-dom";

function MenuTop() {
  const userData = [];

  return (
    <div>
      <div className="w-full border-b border-[#dddddd] px-6 py-2 text-end">
        <DropdownMenu className="">
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4 bg-blancoBg">
            <DropdownMenuLabel>
              <div className="flex gap-4 p-2">
                <div>
                  <Avatar>
                    <AvatarImage
                      src={
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                      }
                    />
                  </Avatar>
                </div>
                <div>
                  <p className="text-base font-semibold text-grisText">
                    Usuario
                    {userData?.name}&nbsp;{userData?.last_name}&nbsp;
                    {userData?.second_last_name}
                  </p>
                  <p className="text-[12px] text-grisSubText">
                    {userData?.email}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuItem className="text-[#D7586B] hover:bg-blancoBox">
              <button
                className="flex gap-4"
                type="button"
                //onClick={logOutFunction}
              >
                <IonIcon icon={logOut} className="h-5 w-5"></IonIcon>
                Cerrar Sesión
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Outlet />
    </div>
  );
}

export default MenuTop;
