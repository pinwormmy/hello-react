import {useState} from "react";

// 커밋테스트 한 번 더
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

    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = '이번 턴 : X';
    
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ /* stats */ }</div>
                    <ol>{ /* TODO */ }</ol>
                </div>
            </div>
        );
    }
}

// =========== 야미

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);