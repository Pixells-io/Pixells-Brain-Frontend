import React, { useState } from "react";
import "../../../public/main.css";
import { Link } from "react-router-dom";

function FirstBanner() {
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedImg, setSelectedImg] = useState(
    "/img/sistema_pixells_project_manager.webp",
  );

  const modules = [
    {
      id: 1,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 2,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 3,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 4,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 5,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 6,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
  ];

  function changeSelectedImg(img, id) {
    setSelectedImg(img);
    setSelectedModule(id);
  }

  return (
    <div className="flex rounded-3xl bg-[#7794F915] px-6 py-6">
      <div className="ml-16 mt-16 w-1/2">
        <span className="text-gradient-home">
          Una nueva forma de <br /> operar tu empresa.
        </span>
        <div className="mt-10">
          <span className="font-roboto text-lg font-light text-[#242425]">
            Implementa un ERP y CRM en la nube con inteligencia artificial.
            <br />
            Vende, transforma, compra, administra tu agenda y más
            <br />
            funciones, con usuarios ilimitados.
          </span>
        </div>
        <div className="mr-40 mt-10 text-center">
          <Link
            to={"/"}
            className="rounded-xl bg-primario px-2 py-2 font-roboto text-xs font-semibold text-white hover:bg-primarioBotones"
          >
            Comenzar Gratis
          </Link>
        </div>
        <div className="mt-32">
          <img
            src="/img/computadora_sistema_pixells.webp"
            alt="Sistema Pixells Laptop"
            className="h-auto w-[34.375rem]"
          />
        </div>
      </div>
      <div className="w-1/2 justify-center pt-20">
        <div className="w-full">
          <img
            src={selectedImg}
            alt="Sistema Pixells Project Manager"
            className={
              selectedModule === 0
                ? "gradient-radius blurred-image h-auto w-[40rem]"
                : "gradient-radius h-auto w-[40rem]"
            }
          />
        </div>
        <div className="tempered-glass ml-[5rem] mt-[-9.375rem] w-[30rem] items-center justify-center rounded-2xl px-6 py-4 text-center">
          <span className="font-poppins text-xl font-semibold text-grisHeading">
            Selecciona un Modulo
          </span>
          <div className="mt-4 grid grid-cols-3 items-center justify-center gap-4">
            {modules.map((module, i) => (
              <div
                key={i}
                className={
                  selectedModule === module.id
                    ? "flex h-28 w-28 items-center justify-center rounded-2xl border border-primario bg-white"
                    : "border-grisClaro flex h-28 w-28 items-center justify-center rounded-2xl border bg-white hover:border-primario"
                }
                onClick={() => changeSelectedImg(module.img, module.id)}
              >
                <span className="font-poppins text-sm text-grisHeading">
                  {module.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstBanner;
