import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Talk from "talkjs";
import Example from "./example.js"


function App(){
    
  const [formScreen, showFormScreen] = useState(true);
  const [messageScreen, showMessageScreen]= useState(false)
  const changeScreen = ()=>{
     showMessageScreen(true);
     showFormScreen(false)
  }
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
  return (
    <div>
      {formScreen && (
        <div>
          <form>
            <label>
              Name{" "}
              <input
                type="text"
                className="input_field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email Address{" "}
              <input
                type="text"
                className="input_field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button className="" onClick={changeScreen} type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      )}

      {messageScreen && (
        <div>
          <Example name={name}
          email={email} />
        </div>
      )}
    </div>
  );
}

export default App;
