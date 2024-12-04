import React from "react";
import { IonIcon } from "@ionic/react";
import {
  barChartOutline,
  settingsOutline,
  terminalOutline,
} from "ionicons/icons";
import "../../../public/main.css";

function SecondBanner() {
  return (
    <div className="second-banner-gradient px-8 py-4 pb-8">
      <div className="border-b border-white py-2">
        <span className="pixells-inteligence-gradient font-poppins text-base font-semibold">
          PIXELLS INTELLIGENCE
        </span>
      </div>
      <div className="flex">
        <div className="w-2/3 px-14 py-14">
          <span className="font-poppins text-4xl font-semibold leading-[55px] tracking-wider text-blancoBg">
            Integra tu empresa <br />
            a la inteligencia <br />
            artificial, haz que <br />
            haga las cosas por ti
          </span>
          <div className="mt-6">
            <span className="font-roboto font-normal leading-4 text-blancoBg">
              Pixells intelligence, está disponible a partir de Diciembre de
              <br />
              2024 dentro del sistema. Su costo puede variar, <br />
              dependiendo los servicios seleccionados.
            </span>
          </div>
        </div>
        <div className="grid w-1/3 items-center">
          <div className="mr-8">
            <div className="flex items-center gap-4 border-b border-white py-6">
              <IonIcon
                icon={settingsOutline}
                className="text-xl text-white"
              ></IonIcon>
              <div>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  Soporte inteligente para poder relizar cualquier <br />
                  acción dentro del sistema. Respuestas faciles y <br />
                  objetivas.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-white py-6">
              <IonIcon
                icon={barChartOutline}
                className="text-xl text-white"
              ></IonIcon>
              <div>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  Reporteo y obtención de información del <br />
                  sistema en tiempo real. Pregunta cuales son <br />
                  tus ventas del días, tus actividades de hoy, etc.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-white py-6">
              <IonIcon
                icon={terminalOutline}
                className="text-xl text-white"
              ></IonIcon>
              <div>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  Ejecuta tareas con inteligencia Pixells. Evita saturarte de
                  actividades operativas y deja que
                </span>
                <span className="crispin-title-gradient"> CRISPIN </span>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  haga las cosas por tí.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
