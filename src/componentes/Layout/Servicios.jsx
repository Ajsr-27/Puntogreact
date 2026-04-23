import Tarjeta from "../Tarjetas/TarjetaProducto";

function Servicios() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-full h-full p-2 border border-black rounded-3xl bg-mist-900 font-semibold text-5xl flex flex-col flex-6 items-center justify-start gap-5">
        <h2 className="w-full text-center">Servicios</h2>
        <div className="w-full flex justify-end gap-5">
          <Tarjeta />
        </div>
      </div>
    </div>
  );
}
export default Servicios;