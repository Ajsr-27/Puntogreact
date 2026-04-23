export default function Navbar() {
  return (
    <header className="w-full flex flex-wrap items-center justify-around py-4 px-6 ">
      <a href="#hero" className="text-xl">
        Punto G Beauty
      </a>
      <div className="hidden md:flex md:items-center" id="menu">
        <nav>
          <ul className="font-[Open_Sans] text-xl md:flex items-center text-gray-700">
            <li><a className="md:p-4 py-3 px-0 block" href="#Hero">Principal</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="#Servicios">Servicios</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="#Contacto">Contacto</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="#Footer">Footer</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}