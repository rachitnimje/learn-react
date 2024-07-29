import { useState } from "react";
import "./App.css";

function App() {
  const [colorClass, setColorClass] = useState("bg-red-500");

  function handleButtonClick(e) {
    console.log(e);
    const classNames = e.target.className.split(" ");
    console.log(classNames);
    const newColorClass = classNames.find((cls) => cls.startsWith("bg-"));
    setColorClass(newColorClass);
  }

  return (
    <div className={`w-screen h-screen flex justify-center ${colorClass}`}>
      <div
        id="buttons"
        className="rounded-full mt-3 bg-white fixed flex justify-center"
      >
        <button
          className="rounded-full px-3 py-2 m-2 font-semibold bg-red-500 shadow-lg hover:bg-black hover:text-red-500  text-black"
          onClick={handleButtonClick}
        >
          red
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-green-500 text-black hover:bg-black hover:text-green-500"
          onClick={handleButtonClick}
        >
          green
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-purple-200 text-purple-900 hover:bg-black hover:text-purple-200"
          onClick={handleButtonClick}
        >
          lavender
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-purple-900 text-purple-200 hover:bg-black hover:text-purple-500"
          onClick={handleButtonClick}
        >
          purple
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-blue-500 text-blue-100 hover:bg-black hover:text-blue-500"
          onClick={handleButtonClick}
        >
          blue
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-orange-500 text-black hover:bg-black hover:text-orange-500"
          onClick={handleButtonClick}
        >
          orange
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-yellow-500 text-black hover:bg-black hover:text-yellow-500"
          onClick={handleButtonClick}
        >
          yellow
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-black text-white hover:bg-white hover:text-black hover:border-black"
          onClick={handleButtonClick}
        >
          black
        </button>

        <button
          className="rounded-full px-3 py-2 m-2 font-semibold shadow-lg bg-pink-500 text-black hover:bg-black hover:text-pink-500"
          onClick={handleButtonClick}
        >
          pink
        </button>
      </div>
    </div>
  );
}

export default App;
