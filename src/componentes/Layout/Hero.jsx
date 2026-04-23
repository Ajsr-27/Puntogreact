import Navbar from "../Nav/Nav";
import Boton from "../Boton/Boton";

export default function Hero() {
  return (
    <div className="h-screen flex items-start justify-center">
      <div className="w-full max-w-screen h-screen mx-auto border border-black rounded-b-3xl bg-linear-to-r from-orange-300 to-transparent flex flex-col overflow-hidden">

        <Navbar />

        {/* Contenedor principal: columna en móvil, fila en desktop */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0">

          {/* TEXTO: siempre arriba en móvil, izquierda en desktop */}
          <div className="flex flex-col items-center md:items-start justify-center gap-3 px-6 py-8 md:flex-1 md:pl-10 md:py-0 md:gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-mist-800 leading-tight text-center md:text-left">
              Punto G Beauty
            </h1>

            <p className="text-lg sm:text-xl lg:text-3xl text-mist-700 text-center md:text-left">
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
          <div className="w-full md:flex-1 md:min-h-0 px-6 pb-6 md:p-8 flex items-center overflow-hidden">
            <img
              src="/img_Hero.webp"
              alt="Punto G Beauty"
              className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-full object-contain object-top rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
}