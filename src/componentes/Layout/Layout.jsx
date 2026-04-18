import Hero from "./Hero";
import Servicios from "./Servicios";
import Footer from "./Footer";
import Contancto from "./Contacto";

function App() {
  return (
    <div className="bg-taupe-300">
      <Hero />
      <Servicios />
      <Contancto/>
      <Footer />
    </div>
  );
}
export default App;