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
                left: `${playerLeft - 50}px`
            }}
            alt="bear"/>
            <img src={props.logo} className="App-logo" alt="logo" 
                />
            <button onClick={()=> setPLeft(playerLeft - 50)}><img src={arrowLeft} 
                
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
            <button onClick={()=> setPLeft(playerLeft + 50)}>
            <img src={arrowRight} 
                
                style={{
                height: "10vmin"}} alt="right"/>
            </button>
        </div>
    )
}


export default Game;