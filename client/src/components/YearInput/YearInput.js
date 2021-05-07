import React, { useState } from "react";
import { useSelector } from 'react-redux';

import { setEspnYear } from '../../actions/Espn';
import { setSleeperYear } from '../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

const YearInput = (props) => {

    const [input, setInput] = useState(2020)

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(input);

        if (props.platform === 'sleeper') {
            setSleeperYear(input);
        } else if (props.platform === 'espn') {
            setEspnYear(input);
        }
    }

    return (
        <Jumbotron className='sleeper__jumbotron'>
            <div className="sleeper__helpertext">
                <p className="bold">
                    The year will default to the current season's year
                </p>
            </div>
            <form onSubmit={onSubmit} className="espnForm">
                <input
                    className="sleeper__input"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Year" 
                    value={input}
                    type="number"
                    />
                <button onClick={onSubmit} type="button" className="btn btn--sleeper">Submit</button>
            </form>
        </Jumbotron>
    )
}

export default YearInput;
