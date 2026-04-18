import Navbar from "../Nav/Nav";
import Boton from "../Boton/Boton";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="w-full max-w-screen h-screen mx-auto border border-black rounded-b-3xl bg-linear-to-r from-orange-300 to-transparent flex flex-col overflow-hidden relative">

        <Navbar />

        {/* Este div ahora ocupa el espacio que queda debajo del Navbar */}
        <div className="flex-1 flex flex-col md:flex-row items-stretch relative z-10 min-h-0">

          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center gap-4 px-10">
            <h1 className="text-8xl text-mist-800">Punto G Beauty</h1>
            <p className="text-3xl text-mist-700">Belleza profesional que realza tu mirada.</p>

            <span className="self-start bg-orange-400 text-mist-700 text-sm px-4 py-1 rounded-full font-medium">
              Especialistas en Lifting de Pestañas
            </span>

            <p className="text-xl text-mist-800">· Turnos disponibles ·</p>

            <div className="flex gap-3 flex-wrap">
              <Boton text="Reservar turno" href="#contacto" />
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-1 min-h-0 p-20">
            <img
              src="/img_Hero.webp"
              alt="Punto G Beauty"
              className="w-full h-full object-top rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
}