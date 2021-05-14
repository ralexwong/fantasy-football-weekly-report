import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatchupPoints } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

const Sleeper3 = () => {

    const [week, setWeek] = useState('');
    const [loading, setLoading] = useState(false)
    const state = useSelector((state) => state)
    const dispatch = useDispatch();

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
        <Jumbotron className="input__jumbotron">
            <div className="input__helpertext">
                <p className="bold">
                    Select a week!
                </p>
            </div>
            <form onSubmit={onSubmit} className="ui form error">
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
        </Jumbotron>
    )
}

export default Sleeper3;