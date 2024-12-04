import Footer from "@/layouts/Footer";
import React from "react";

function PrivacyNotice() {
  return (
    <div>
      <div className="mx-8 my-4 rounded-3xl bg-[#7794F915] px-6 py-6 text-center">
        <span className="font-poppins text-2xl text-grisHeading">
          AVISO DE PRIVACIDAD
        </span>
        <div className="px-20 pt-14 text-left text-justify font-roboto text-base text-grisHeading">
          <p className="mb-4">
            <strong>1. Responsable del Tratamiento de Datos Personales</strong>
            <br />
            Pixells (en adelante, "la Empresa"), con domicilio en Justo Sierra
            1830, Col. Ladrón de Guevara, Gdl, Jal, es responsable del
            tratamiento de sus datos personales conforme a lo dispuesto en la
            Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares (LFPDPPP).
          </p>

          <p className="mb-4">
            <strong>2. Finalidad del Tratamiento de Datos</strong>
            <br />
            Los datos personales que recabamos de usted serán utilizados para
            las siguientes finalidades:
            <ul className="ml-6 mt-2 list-disc">
              <li>Proveer los servicios y productos solicitados por usted.</li>
              <li>Informar sobre cambios o nuevos productos o servicios.</li>
              <li>Cumplir con obligaciones contractuales y fiscales.</li>
              <li>Evaluar la calidad del servicio que le brindamos.</li>
              <li>
                Envío de promociones, ofertas, y noticias relacionadas con
                nuestros productos y servicios.
              </li>
            </ul>
          </p>

          <p className="mb-4">
            <strong>3. Datos Personales Recabados</strong>
            <br />
            Para llevar a cabo las finalidades descritas, utilizaremos los
            siguientes datos personales:
            <ul className="ml-6 mt-2 list-disc">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección postal</li>
              <li>Información financiera (cuando sea necesaria)</li>
            </ul>
          </p>

          <p className="mb-4">
            <strong>4. Transferencia de Datos Personales</strong>
            <br />
            La Empresa podrá compartir sus datos personales con terceros
            nacionales o extranjeros que sean necesarios para cumplir con las
            finalidades descritas, incluyendo:
            <ul className="ml-6 mt-2 list-disc">
              <li>
                Proveedores de servicios de TI, para el almacenamiento y
                procesamiento de datos.
              </li>
              <li>
                Instituciones financieras, para la gestión de pagos y
                transacciones.
              </li>
            </ul>
          </p>

          <p className="mb-4">
            <strong>5. Derechos ARCO</strong>
            <br />
            Usted tiene derecho a Acceso, Rectificación, Cancelación y Oposición
            de sus datos personales. Para ejercer estos derechos, envíe una
            solicitud a nuestro correo electrónico incluyendo:
            <ul className="ml-6 mt-2 list-disc">
              <li>Nombre completo y datos de contacto</li>
              <li>
                Descripción clara de los datos personales y derechos a ejercer
              </li>
              <li>Documentación que facilite la localización de los datos</li>
            </ul>
          </p>

          <p className="mb-4">
            <strong>6. Modificaciones al Aviso de Privacidad</strong>
            <br />
            La Empresa se reserva el derecho de realizar modificaciones a este
            aviso de privacidad. Las actualizaciones estarán disponibles en
            pixels.io.
          </p>

          <p className="mb-4">
            <strong>7. Aceptación del Aviso de Privacidad</strong>
            <br />
            El uso de nuestros servicios implica que ha leído y aceptado los
            términos de este aviso de privacidad.
          </p>

          <p className="mb-4">
            <strong>8. Contacto</strong>
            <br />
            Para dudas o aclaraciones:
            <br />
            Correo electrónico: <strong>hola@pixells.io</strong>
            <br />
            Dirección:{" "}
            <strong>Justo Sierra 1830, Col. Ladrón de Guevara, Gdl, Jal</strong>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyNotice;
