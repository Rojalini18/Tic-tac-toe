import React, { useEffect, useState } from 'react'
import Square from '../Square'

const clear=[]

const Tictactoe = () => {
  
  const [play, setPlay] = useState(clear)
  const [replace, setReplace] = useState(false)

  const byClicking = (item) => {
    let strings = Array.from(play);
    if (strings[item])
     return;
    strings[item] = replace ? "X" : "0";
    setReplace(!replace)
    setPlay(strings)
  }

  const clearPlay = () =>{
    setPlay(clear) 
  }
  useEffect(() => {
    let winner = findWinner()
    if(winner) {
      clearPlay();
      alert(`Wo-hoo ! ${winner} Won The Game !`)
    }
  }, [play])

  const findWinner = () =>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log('Class: App, Function: findWinner ==', play[0], play[1], play[2]);
        for (let i = 0; i < lines.length; i++) {
            const [x, y, z] = lines[i];
            if (play[x] && play[x] === play[y] && play[x] === play[z]) {
                return play[x];
            }
        }
        return null;
  }

  return (
    <div className="main">
            <p className="heading"> Tic-Tac-Toe </p>
            <div className="row jstfy">
                <Square className="b-btm-right" onClick={() => byClicking(0)} state={play[0]}/>
                <Square className="b-btm-right" onClick={() => byClicking(1)} state={play[1]}/>
                <Square className="b-btm" onClick={() => byClicking(2)} state={play[2]}/>
            </div>
            <div className="row jstfy">
                <Square className="b-btm-right" onClick={() => byClicking(3)} state={play[3]}/>
                <Square className="b-btm-right" onClick={() => byClicking(4)} state={play[4]}/>
                <Square className="b-btm" onClick={() => byClicking(5)} state={play[5]}/>
            </div>
            <div className="row jstfy">
                <Square className="b-right" onClick={() => byClicking(6)} state={play[6]}/>
                <Square className="b-right" onClick={() => byClicking(7)} state={play[7]}/>
                <Square onClick={() => byClicking(8)} state={play[8]}/>
            </div>
            <button className="clr-play" onClick={clearPlay}>Reset</button>
         
        </div>
  )
}

export default Tictactoe;


