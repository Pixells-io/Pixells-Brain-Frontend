import React, { useEffect, useState } from "react";

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
import { Outlet, useNavigate } from "react-router-dom";
import { getUserByToken } from "@/pages/Login/utils";
import Cookies from "js-cookie";
import { logOutRequest } from "@/lib/actions";

function MenuTop() {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  /* Login Validator */
  useEffect(() => {
    if (!token) return navigate("/login");

    async function fetchData() {
      const user = await getUserByToken();
      if (user.code == 400) return navigate("/login");
      setUserData(user?.data);
      if (user.status == 500) return navigate("/login");
    }
    fetchData();
  }, [token]);

  async function logOutFunction() {
    //First send the request
    await logOutRequest();
    //Remove token
    Cookies.remove("token");

    //Redirect to the login
    return navigate("/login");
  }

  return (
    <div className="h-screen min-h-0 overflow-hidden">
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
                    {userData?.name}&nbsp;{userData?.last_name}&nbsp;
                    {userData?.second_last_name}
                  </p>
                  <p className="text-[12px] text-grisSubText">
                    {userData?.email}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuItem className="bg-red-100 text-red-500 hover:bg-red-200">
              <button
                className="flex gap-4 px-4 py-2"
                type="button"
                onClick={() => logOutFunction()}
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
