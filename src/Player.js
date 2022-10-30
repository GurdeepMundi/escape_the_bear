import React, { useState, useEffect  } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';

function Player(props){
    const [top, setTop] = useState(props.top);
    const [left, setLeft] = useState(props.left);
    
    function goUp() {
        setTop(top - 50);
    }
    function goDown() {
        setTop(top + 50);
    }
    function goRight() {
        setLeft(left + 50);
    }
    function goLeft() {
        alert();
        setLeft(left - 50);
    }
    useEffect(() => {
        // setTop(220);
        // setLeft(530);
    });
    return (
        <img src={props.player}
            style={{
                height: "10vmin",
                position: "absolute",
                top: `${top}px`,
                left: `${left}px`
            }}
            alt="player"/>
    );
}


export default Player;