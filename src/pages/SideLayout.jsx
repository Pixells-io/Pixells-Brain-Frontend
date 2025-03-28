import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  accessibilityOutline,
  cardOutline,
  clipboardOutline,
  disc,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Cookies from "js-cookie";
import { getUserByToken } from "./Login/utils";

function SideLayout() {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  /* Login Validator */
  useEffect(() => {
    async function fetchData() {
      const user = await getUserByToken();
      if (user.code == 400) return navigate("/login");
      setUserData(user?.data);
      if (token == undefined || user.status == 500) return navigate("/login");
    }
    fetchData();
  }, [token]);

  let MENU_ITEMS = [];

  if (userData?.role == 1) {
    MENU_ITEMS = [
      {
        path: "/users",
        name: "Usuarios",
        subname: "Administracion",
        icon: accessibilityOutline,
      },
      {
        path: "/suscriptions",
        name: "Suscripciones",
        subname: "Stripe",
        icon: cardOutline,
      },
      {
        path: "/discounts",
        name: "Descuentos",
        subname: "Suscripciones",
        icon: clipboardOutline,
      },
    ];
  } else {
    MENU_ITEMS = [
      {
        path: "/suscriptions",
        name: "Suscripciones",
        subname: "Stripe",
        icon: cardOutline,
      },
    ];
  }

  return (
    <div className="flex h-full w-full">
      {/* Menú lateral */}
      <div className="flex h-full w-1/5 flex-col gap-4 border-r border-[#dddddd] px-4 pt-16">
        <p className="font-poppins text-lg font-semibold text-grisHeading">
          Menu
        </p>
        <div className="flex flex-col gap-4">
          {MENU_ITEMS.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={item.icon} size="large" />
                <div>
                  <p className="text-base font-medium">{item.name}</p>
                  <p className="text-[10px] font-medium text-grisSubText">
                    {item.subname}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="h-full w-4/5 flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default SideLayout;
