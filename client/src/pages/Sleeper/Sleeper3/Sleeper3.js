import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatchupPoints } from '../../../actions/Sleeper';

import axios from 'axios';

import {JSO, Popup} from 'jso'

let client = new JSO({
	providerID: "google",
	client_id: "dj0yJmk9UlJtNUhhNW5UeFc1JmQ9WVdrOWJqVlBTRGRTV2xVbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTdi",
	redirect_uri: "http://localhost:3000/", // The URL where you is redirected back, and where you perform run the callback() function.
	authorization: "https://api.login.yahoo.com/oauth2/request_auth",
	scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
})


const Sleeper3 = () => {
    const [week, setWeek] = useState('');
    const [loading, setLoading] = useState(false)
    const state = useSelector((state) => state)
    const dispatch = useDispatch();


    useEffect( () => {
        const response = axios.get(`https://api.login.yahoo.com/oauth2/request_auth?client_id=
        dj0yJmk9UlJtNUhhNW5UeFc1JmQ9WVdrOWJqVlBTRGRTV2xVbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTdi--&redirect_uri=https://localhost:3000&response_type=code&language=en-us`);

        

        // client.callback()

        // client.getToken()
        //     .then((token) => {
        //         console.log("I got the token: ", token)
        //     })

        
    }, [])

    const handleChange = (event) => {
        const { maxLength } = event.target;
        const message = event.target.value.slice(0, maxLength);

        if (message < 1) {

        } else {
            setWeek(message);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onLoading();
        console.log(week);
        dispatch(fetchMatchupPoints(week, state.sleeper.league_id, state.sleeper.league_info));
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
            <div className="input__helpertext">
                <p className="bold">
                    Select a week!
                </p>
            </div>
            <form onSubmit={onSubmit}>
                <input
                    required
                    maxLength="2"
                    className="input__input"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={state.sleeper.sleeperWeek ? state.sleeper.sleeperWeek : 'Week'}
                    type="number"
                    value={week}
                />
                <p className='helperText'></p>
                {loading ? (
                    <button className="btn btn--sleeper" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                ) : (
                    <button onClick={onSubmit} type="button" className="btn btn--sleeper">Submit</button>
                )}
            </form>
        </div>
    )
}

export default Sleeper3;