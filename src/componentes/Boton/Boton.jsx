// src/components/Button.jsx
function Boton({ text }) {
  return (
    <a href="#" className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-sky-600 transition">
      {text}
    </a>
  );
}

export default Boton;