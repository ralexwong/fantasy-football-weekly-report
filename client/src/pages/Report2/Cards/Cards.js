import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Col } from "reactstrap"

const Cards = () => {
    const [width, setWidth] = useState(0)

    const state = useSelector((state) => state)

    useEffect(() => {
        updateWindowDimensions()
        window.addEventListener("resize", updateWindowDimensions)

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        }
    }, [])

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
    };

    let first_place = ""
    let first_place_name = "Player 1";
    if (state.espn.espn_first_place && state.espn.espnReport) {
        first_place = `https://whispering-woodland-11588.herokuapp.com/${state.espn.espn_first_place.logo}`;
        first_place_name = state.espn.espn_first_place.name
    } else if (state.sleeper.sleeper_first_place && state.sleeper.sleeperReport) {
        first_place = `https://whispering-woodland-11588.herokuapp.com/http://sleepercdn.com/avatars/${state.sleeper.sleeper_first_place.logo}`;
        first_place_name = state.sleeper.sleeper_first_place.name
    }

    let last_place = ""
    let last_place_name = "Player 2";
    if (state.espn.espn_last_place && state.espn.espnReport) {
        last_place = `https://whispering-woodland-11588.herokuapp.com/${state.espn.espn_last_place.logo}`
        last_place_name = state.espn.espn_last_place.name;
    } else if (state.sleeper.sleeper_last_place && state.sleeper.sleeperReport) {
        last_place = `https://whispering-woodland-11588.herokuapp.com/http://sleepercdn.com/avatars/${state.sleeper.sleeper_last_place.logo}`;
        last_place_name = state.sleeper.sleeper_last_place.name;
    }
        
    if (width < 575) {
        return (
            <div>
                <Col xs={6} className="cards">
                    <p className="reportTitle">FIRST PLACE</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                src={first_place} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p className="cards__name">{first_place_name}</p>
                    </div>
                </Col>

                <Col xs={6} className="cards">
                    <p className="reportTitle">LAST PLACE</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                src={last_place} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p className="cards__name">{last_place_name}</p>
                    </div>
                </Col>
            </div>
        )
    } else {
        return (
            <Col className="cards">
                <p className="reportTitle">FIRST PLACE</p>

                <div className='cards__outerBox'>
                    <div className='cards__innerBox'>
                        <img 
                            crossOrigin="anonymous"
                            referrerPolicy="origin" 
                            onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                            src={first_place} 
                            alt="poop" 
                            className="cards__image" />
                    </div>
                </div>
                <div className='cards__lowerBox'>
                    <p>{first_place_name}</p>
                </div>

                <div className="hr"></div>

                <p className="reportTitle">LAST PLACE</p>

                <div className='cards__outerBox'>
                    <div className='cards__innerBox'>
                        <img 
                            crossOrigin="anonymous"
                            referrerPolicy="origin" 
                            onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                            src={last_place} 
                            alt="poop" 
                            className="cards__image" />
                    </div>
                </div>
                <div className='cards__lowerBox'>
                    <p>{last_place_name}</p>
                </div>
            </Col>
        )
    }
}

export default Cards;