import Navbar from "../Nav/Nav";
import Boton from "../Boton/Boton";

export default function Hero() {
  return (
    <div className="max-h-screen flex items-start justify-center">
      <div className="w-full h-screen mx-auto border border-black rounded-b-3xl bg-linear-to-r from-orange-300 to-transparent flex flex-col overflow-hidden">

        <Navbar />

        {/* Contenedor principal: columna en móvil, fila en desktop */}
        <div className="flex flex-1 max-h-full max-w-full p-5 gap-5 flex-col justify-center items-center lg:flex-row sm:flex-col md:flex-col  ">

          {/* TEXTO: siempre arriba en móvil, izquierda en desktop */}
          <div className="flex flex-col justify-center items-start gap-3 px-6 py-8 md:pl-10 md:py-0 md:gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-mist-800 leading-tight text-center md:text-left">
              Punto G Beauty
            </h1>

            <p className="text-lg sm:text-xl lg:text-3xl text-mist-700 text-start md:text-left">
              Belleza profesional que realza tu mirada.
            </p>

            <span className="bg-orange-400 text-mist-700 text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap">
              Especialistas en Lifting de Pestañas
            </span>

            <p className="text-base sm:text-lg lg:text-xl text-mist-800 text-center md:text-left">
              · Turnos disponibles ·
            </p>

            <div className="flex gap-3 flex-wrap">
              <Boton text="Reservar turno" href="#contacto" />
            </div>
          </div>

          {/* IMAGEN: siempre debajo en móvil, derecha en desktop */}
          <div className="flex items-center justify-center ">
            <img
              src="/img_Hero.webp"
              alt="Punto G Beauty"
              className="w-full max-w-md lg:max-w-full xl:max-w-xl h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
}