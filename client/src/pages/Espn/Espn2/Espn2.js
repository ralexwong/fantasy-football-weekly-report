import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setEspnWeek } from '../../../actions/Espn';


const Espn2 = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { maxLength } = event.target;
        const message = event.target.value.slice(0, maxLength);

        if (message > 1) {
            setInput(message);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onLoading();
        dispatch(setEspnWeek(
            parseInt(input), 
            state.espn.espn, 
            state.espn.espnSchedule,
            state.espn.espnTopScorer,
            state.espn.espnCloseOne
        ))
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
            <p className="input__helpertext">
                Please enter the week
            </p>
            <form onSubmit={onSubmit} className="espnForm">
                <input
                    required
                    className="input__input"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={state.espn.espnWeek ? state.espn.espnWeek : "Week"}
                    type="number"
                    value={input}
                    maxLength={2}
                />
                <p className='helperText'></p>
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