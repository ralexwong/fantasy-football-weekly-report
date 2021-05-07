import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setLeague_id, fetchLeagueInfo } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

const Sleeper2 = () => {

    const [active, setActive] = useState('');
    const state = useSelector((state) => state)
    const dispatch = useDispatch();

    const onClick = (e) => {
        console.log(e.target.getAttribute('id'));
        const league = e.target.id;

        if(active === league) { 
            setActive('');
        } else {
            setActive(league)
       }

        localStorage.setItem("league", league);
        dispatch(setLeague_id(league));
        dispatch(fetchLeagueInfo(league));
    }

    const mapLeagues = (leagues) => {
        return leagues.map(league => {
            return (
                <p className={`sleeper__list ${active === league.league_id ? `sleeper__list--active` : ``}`} id={league.league_id} key={league.league_id} onClick={(e) => onClick(e)} >
                    {league.name}
                </p>
            )
        })
    }

    return (
        <Jumbotron className="sleeper__jumbotron" ref={state.sleeper.reference}>
            <div className="sleeper__helpertext">
                <p className="bold">
                    Click on one league!
                </p>
                {state.sleeper.leagues ? (
                    mapLeagues(state.sleeper.leagues)
                ) : (
                        <p className="paragraph">No Leagues Found</p>
                    )}
            </div>

        </Jumbotron>
    )
}

export default Sleeper2;