import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { fetchEspn } from '../../../actions/Espn';

import { Jumbotron } from 'reactstrap';

const Espn1 = (props) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        const { maxLength } = event.target;
        const message = event.target.value.slice(0, maxLength);

        setInput(message);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onLoading();
        console.log(input);
        dispatch(fetchEspn(input, state.espn.espnYear))
    }

    const onLoading = () => {
        setLoading(true);
        setTimeout(() => { 
            setLoading(false)
        }, 
        1500);
    }

    let error = false
    if (state.espn.espnID === null) {
        error = true
    }
    return (
        <Jumbotron className="sleeper__jumbotron">
            <p className="sleeper__helpertext">
                Please enter your ESPN league ID
                <br />
                (You can use my espn league if you want to try it out: <b>20294539</b>)
            </p>
            <form onSubmit={onSubmit} className="espnForm">
                <input
                    required
                    maxLength="10"
                    className={`sleeper__input ${error ? 'sleeper__input--error' : ''}`}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={state.espn.espnID ? state.espn.espnID : "ID"}
                    type="number"
                    value={input}
                />
                {error ? (
                    <p className='helperText red'>This league cannot be found</p>
                ) : (
                    <p className='helperText'></p>
                )}
                {loading ? (
                    <button className="btn btn--espn" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                ) : (
                    <button onClick={onSubmit} type="button" className="btn btn--espn">Submit</button>
                )}
            </form>
        </Jumbotron>
    )
}

export default Espn1;
