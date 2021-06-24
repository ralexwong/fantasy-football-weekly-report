import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { fetchEspn } from '../../../actions/Espn';

const Espn1 = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const state = useSelector((state) => state.espn)
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
        dispatch(fetchEspn(
            input, 
            state.espnYear,
            state.espnFirstPlace,
            state.espnLastPlace,
            state.espnID
        ))
    }

    const onLoading = () => {
        setLoading(true);
        setTimeout(() => { 
            setLoading(false)
        }, 
        1500);
    }

    useEffect(() => {
        if (!state.espnID) {
            setError(true)
        } else {
            setError(false)
        }
    }, [state.espnID])

    
    return (
        <div className="input__jumbotron">
            <p className="input__helpertext input__helpertext--big">
                Please enter your ESPN league ID
                <br />
                (You can use my espn league if you want to try it out: 20294539)
            </p>
            <form onSubmit={onSubmit} className="espnForm">
            <div className='input__container'>
                <label className='input__label' htmlFor='espnID'>ID</label>
                <input
                    required
                    id='espnID'
                    maxLength="10"
                    className={`input__input ${error ? 'input__input--error' : ''}`}
                    onChange={handleChange}
                    autoComplete="off"
                    type="number"
                    value={input}
                />
            </div>
                {error ? (
                    <p className='input__helpertext red'><span aria-label='red-X' role='img'>❌</span> This league cannot be found</p>
                ) : (
                    <p className='input__helpertext'></p>
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
        </div>
    )
}

export default Espn1;
