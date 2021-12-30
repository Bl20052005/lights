import './App.css';
import React, { useState } from 'react';
function App() {
  var timeInterval;
  //const [counter, setCounter] = useState(0);
  var counter = 0;
  const startLights = () =>{
    let reds = document.querySelectorAll(".redLight");
    let yellows = document.querySelectorAll(".yellowLight");
    let greens = document.querySelectorAll(".greenLight");
    document.getElementById("buttonId").hidden = true;
    timeInterval = setInterval(() =>{
      for(let i = 0; i < reds.length; i++){
        if((i+counter)%3 === 0){
          yellows[i].style.backgroundColor = "black";
          greens[i].style.backgroundColor = "black";
          reds[i].style.backgroundColor = "red";
        }
        else if((i+counter)%3 === 1){
          yellows[i].style.backgroundColor = "yellow";
          greens[i].style.backgroundColor = "black";
          reds[i].style.backgroundColor = "black";
        }
        else if((i+counter)%3 === 2){
          yellows[i].style.backgroundColor = "black";
          greens[i].style.backgroundColor = "green";
          reds[i].style.backgroundColor = "black";
        }
      }
      counter++;
      counter %= 3;
    }, 500);
  }
  const repeat = [...Array(432)].map( (v) =>
        <div className="repeatFunction">
          <div className="redLight"></div>
          <div className="yellowLight"></div>
          <div className="greenLight"></div>
        </div>
      );
  
  return (
    <div className="App">
      <head>
        <meta name="description" content="traffic light stuff"/>
        <meta name="keywords" content="HTML,CSS,JavaScript"/>
      </head>
      <body>
        <div className = "rowFormation">{repeat}</div>
        <button type="button" id="buttonId" onClick={startLights}>b u t t o n</button>
      </body>
    </div>
  );
}

export default App;
