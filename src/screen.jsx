import Keys from "./keypad";
import { useState } from "react";
export default function Screen() {
const [input,setinput]=useState("")

 const handleclick=(value)=>{
    setinput(input+value)
 }

const findinganswer=()=>{
 let output= eval(input)
 setinput(output)
}
const clearAnswer=()=>{
    setinput("")
}
  return (
    <>
      <div className="caluculator">
        <div className="container">
          <div className="output_screen">
            <div>
              <input type="text" value={input} className="output" />
            </div>

            <div>
              <button className="digit clear-btn" onClick={clearAnswer}>C</button>
            </div>
          </div>s
          <Keys handleclick={handleclick} handleequalbtn={findinganswer} />
        </div>
      </div>
    </>
  );
}
