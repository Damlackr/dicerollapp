import React, { useState } from "react";
import dice1 from './images/Dice1.png';
import dice2 from './images/Dice2.png';
import dice3 from './images/Dice3.png';
import dice4 from './images/Dice4.png';
import dice5 from './images/Dice5.png';
import dice6 from './images/Dice6.png';

var list = [dice1, dice2, dice3, dice4, dice5, dice6];

function RollingDice(){
    const [rolledDice1, setRolledDice1] = useState(0);

    const roll = () =>{
        const newRandomNumber1 = Math.floor(Math.random() * 6) + 1;

        setRolledDice1(newRandomNumber1);
    }

    return(
        <div>
            <img src={list[rolledDice1-1]} width="100" height="100"/> 	&nbsp;
            <button onClick={roll} style={{backgroundColor:'pink'}}> Sallayınız</button>
        </div>
    )
}

export default RollingDice;