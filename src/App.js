import './App.css';
import React, { useState, useEffect } from "react";
import soundfile from "./E.mp3";
function App() {
  var timeInterval;
  var audioFile;
  var counter = 0;
  const startLights = (e) =>{
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
    audioFile = new Audio(soundfile);
    audioFile.play();
    e.stopPropagation();
  }

  const restoreButton = (event) =>{
    clearInterval(timeInterval);
    let reds = document.querySelectorAll(".redLight");
    let yellows = document.querySelectorAll(".yellowLight");
    let greens = document.querySelectorAll(".greenLight");
    for(let i = 0; i < reds.length; i++){
      yellows[i].style.backgroundColor = "black";
      greens[i].style.backgroundColor = "black";
      reds[i].style.backgroundColor = "black";
    }
    document.getElementById("buttonId").hidden = false;
    audioFile.pause();
  }

  const repeat = [...Array(432)].map( (v) =>
        <div className="repeatFunction">
          <div className="redLight"></div>
          <div className="yellowLight"></div>
          <div className="greenLight"></div>
        </div>
      );
  
  return (
    <div className="App" onClick={restoreButton}>
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
