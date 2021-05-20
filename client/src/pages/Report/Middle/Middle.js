import React from 'react';
import Standouts from '../Standouts';
import Scoreboard from '../Scoreboard';

const MiddleRow = () => {
    return (
        <div className="u-margin-top middleRow">
            <Scoreboard />
            <Standouts />
        </div>
    )
}

export default MiddleRow;
