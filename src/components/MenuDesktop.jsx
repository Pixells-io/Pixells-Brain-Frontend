import React from "react";
import { Link } from "react-router-dom";

function MenuDesktop() {
  return (
    <div className="sticky top-0 z-10 flex justify-between bg-white px-8 py-3">
      <div className="flex w-1/3 items-center">
        <Link to="/">
          <img src="/img/logo.webp" alt="Pixells Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex w-1/3 items-center justify-center gap-8">
        <Link
          to={"/"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          INICIO
        </Link>
        <Link
          to={"/"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          MÓDULOS
        </Link>
        <Link
          to={"/"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          SOPORTE
        </Link>
        <Link
          to={"/"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          CONTACTO
        </Link>
      </div>
      <div className="flex w-1/3 items-center justify-end gap-4">
        <Link
          to={"/"}
          className="font-poppins text-sm font-medium text-primarioBotones hover:text-primario"
        >
          INGRESAR
        </Link>
        <Link
          to={"/"}
          className="rounded-xl bg-primarioBotones px-2 py-2 font-roboto text-xs font-semibold text-white hover:bg-primario"
        >
          Comenzar Gratis
        </Link>
      </div>
    </div>
  );
}

export default MenuDesktop;
