import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeagues } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

const Sleeper1 = () => {
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

        let regex = /^[A-Za-z0-9 ]+$/;

        let isValid = regex.test(input);
        if (!isValid) {
            alert('Invalid characters')
        } else {
            dispatch(fetchLeagues(input, state.sleeper.sleeperYear))
        }

    }

    const onLoading = () => {
        setLoading(true);
        setTimeout(() => { 
            setLoading(false)
        }, 
        1500);
    }

    let error = false
    if (state.sleeper.sleeperUsername === null) {
        error = true
    }
    return (
        <Jumbotron className="sleeper__jumbotron">
            <div className="sleeper__helpertext">
                <p className="bold">
                    First enter your username here!
                </p>
                <p>
                    (You can use my username if you want to test it out: <b>wongman</b>)
                </p>
            </div>
            <form onSubmit={onSubmit} className="sleeperForm">
                    <input
                        required
                        maxLength="25"
                        className={`sleeper__input ${error ? 'sleeper__input--error' : ''}`}
                        onChange={handleChange}
                        value={input}
                        autoComplete="off"
                        placeholder={state.sleeper.sleeperUsername ? state.sleeper.sleeperUsername : 'Username'}
                    />
                    {error ? (
                        <p className='helperText red'>This username cannot be found</p>
                    ) : (
                        <p className='helperText'></p>
                    )}
                {loading ? (
                    <button className="btn btn--sleeper" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                ) : (
                    <button onClick={onSubmit} type="button" className="btn btn--sleeper">Submit</button>
                )}
            </form>
        </Jumbotron>
    )
}

export default Sleeper1;