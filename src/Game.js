import React, { useState, useEffect } from 'react';
import Player from './Player.js'
import arrowLeft from "./arrow_left.png"
import arrowUp from "./arrow_up.png"
import arrowDown from "./arrow_down.jpg"
import arrowRight from "./arrow_right.png"
import scaryBear from './scary-bear.png'

const Game = (props) => {
    
    const [playerTop, setPTop] = useState(220);
    const [playerLeft, setPLeft] = useState(430);
    const [range, setRange] = useState(50);
    let [distance, setDistance] = useState(0);
    function moveRight() {
        setPLeft(playerLeft + 50)
        setDistance(distance + 1);
        if(distance === 8) {
            const answer = prompt("What is \"1\" + \"1\"");
            if(answer === "11"){
                alert("You escaped the bear!");
                setRange(300)
            } else {
                alert("The bear caught you!");
                setRange(0)
            }
        }
    }
    function moveLeft() {
        setPLeft(playerLeft - 50);
        alert("The bear caught you!");
        setRange(0)
    }
    return (
        <div>
            <img src={props.player}
            style={{
                height: "10vmin",
                position: "absolute",
                top: `${playerTop}px`,
                left: `${playerLeft}px`
            }}
            alt="player"/>
            <img src={scaryBear}
            style={{
                height: "10vmin",
                position: "absolute",
                top: `${playerTop}px`,
                left: `${playerLeft - range}px`
            }}
            alt="bear"/>
            <img src={props.logo} className="App-logo" alt="logo" 
                />
            <button onClick={()=> moveLeft()}><img src={arrowLeft} 
                
                style={{
                height: "10vmin"}} alt="left"/></button>
            <button onClick={()=> setPTop(playerTop - 50)}>
            <img src={arrowUp}

                style={{
                height: "10vmin"}} alt="up"/></button>
            <button onClick={()=> setPTop(playerTop + 50)}>
            <img src={arrowDown} 
                style={{
                height: "10vmin"}} alt="down"/>
            </button>
            <button onClick={()=> moveRight()}>
            <img src={arrowRight} 
                
                style={{
                height: "10vmin"}} alt="right"/>
            </button>
        </div>
    )
}


export default Game;