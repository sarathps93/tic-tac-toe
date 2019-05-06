import React from 'react';
import Board from './components/Board';

class Game extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="mainContainer">
                        <Board />
                    </div>
                    <div>
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Game;
