import React from 'react';

const Game = (props) => {
    return (
        <div>
            <img src={props.player}  alt="player"/>
            <img src={props.logo} className="App-logo" alt="logo" />
        </div>
    )
}


export default Game;