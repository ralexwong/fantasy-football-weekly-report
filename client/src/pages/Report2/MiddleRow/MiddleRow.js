import React from 'react';
import Cards from '../Cards';
import Recap from '../Recap';

const MiddleRow = () => {
    return (
        <div className="u-margin-top middleRow">
            <Recap />
            <Cards />
        </div>
    )
}

export default MiddleRow;
