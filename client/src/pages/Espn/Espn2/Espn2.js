import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setEspnWeek } from '../../../actions/Espn';

const Espn2 = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const state = useSelector((state) => state.espn);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { maxLength } = event.target;
        const message = event.target.value.slice(0, maxLength);

        setInput(message);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onLoading();
        if (!state.espnID) {
            setError(true)
        } else {
            setError(false)
            dispatch(setEspnWeek(
                parseInt(input), 
                state.espn, 
                state.espnSchedule,
                state.espnTopScorer,
                state.espnCloseOne
            ))
        }
        
    }

    const onLoading = () => {
        setLoading(true);
        setTimeout(() => { 
            setLoading(false)
        }, 
        2000);
    }

    return (
        <div className="input__jumbotron">
            <p className="input__helpertext input__helpertext--big">
                Please enter the week
            </p>
            <form onSubmit={onSubmit} className="espnForm">
                <div className='input__container'>
                    <label className='input__label' htmlFor='espnWeek'>Week</label>
                    <input
                        id='espnWeek'
                        required
                        className={`input__input ${error ? 'input__input--error' : ''}`}
                        onChange={handleChange}
                        autoComplete="off"
                        type="number"
                        value={input}
                        maxLength={2}
                    />
                </div>
                
                {error ? (
                    <p className='input__helpertext red'><span aria-label='red-X' role='img'>❌</span> A valid league must be inputted first</p>
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
                )
            }
            </form>
        </div>
    )
}

export default Espn2;