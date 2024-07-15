import {useState} from "react";

function Square ({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSqureCick}> 
            {value}
        </button>
    );
}

function Board ({xIsNext, squares, onPlay}) {
    function handleClick(i){
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = '이번 턴 : ' + (xIsNext? 'X' : 'O');
    }

    return(
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick = {() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick = {() => handleClick(0)} />
                <Square value={squares[2]} onSquareClick = {() => handleClick(0)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick = {() => handleClick(0)} />
                <Square value={squares[4]} onSquareClick = {() => handleClick(0)} />
                <Square value={squares[5]} onSquareClick = {() => handleClick(0)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick = {() => handleClick(0)} />
                <Square value={squares[7]} onSquareClick = {() => handleClick(0)} />
                <Square value={squares[8]} onSquareClick = {() => handleClick(0)} />
            </div>
        </>
    );
}

export default Game() {
    
}
