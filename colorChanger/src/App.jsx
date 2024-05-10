import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor: color}}   
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">  {/* this div is for positioning */}
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
     
      {/* onclick working as a callback */}
      <button
       onClick={() => setColor("red")}   
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "red"}}
      >Red
      </button>

      <button
      onClick={() => setColor("green")}   
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "Green"}}
      >Green
      </button>

      <button
      onClick={() => setColor("blue")}   
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "blue"}}
      >Blue
      </button>

      <button
      onClick={() => setColor("pink")}   
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "pink"}}
      >Pink
      </button>

      <button
      onClick={() => setColor("cyan")}   
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "cyan"}}
      >Cyan
      </button>

      <button
      onClick={() => setColor("orange")}   
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "orange"}}
      >Orange
      </button>

      <button
      onClick={() => setColor("violet")}   
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "violet"}}
      >Violet
      </button>

      <button
      onClick={() => setColor("cornsilk")}   
       className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "cornsilk"}}
      >Cornsilk
      </button>


      </div>
       
      </div>

    </div>
  )
}

export default App
