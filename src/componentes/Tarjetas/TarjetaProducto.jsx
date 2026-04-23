import Boton from "../Boton/Boton";

export default function Tarjeta() {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-md max-w-md w-full">

      {/* IMAGEN */}
      <div className="sm:w-1/3 w-1/2 h-48 sm:h-auto">
        <img
          src="img_LimpiezaHd.webp"
          alt="Perfilado de Cejas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENIDO */}
      <div className="flex flex-col justify-between p-4 flex-1 gap-2">
        <h2 className="font-semibold text-lg">
          Perfilado Clasico
        </h2>

        <p className="text-sm">
          Diseño y limpieza de cejas con técnica tradicional para resaltar tu mirada con precisión.
        </p>

        <Boton text="Leer más" />
      </div>

    </div>
  );
}