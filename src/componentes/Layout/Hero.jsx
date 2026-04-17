import Navbar from "../Nav/Nav";

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex h-full justify-between">
        <Navbar />
        <div className="max-w-1vh min-h-200 w-full mx-auto border border-black rounded-3xl bg-orange-300 flex items-center justify-center">
          <h1>Bienvenidos a mi App React</h1>
        </div>
      </div>


    </div>
  );
}
export default Hero;