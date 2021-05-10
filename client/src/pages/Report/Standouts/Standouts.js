import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Col } from "reactstrap"


const Standouts = () => {
    
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

    let topScorer = {
        name: "",
        score: 0,
        logo: ""
    }
    let closeOne = {
        name: "",
        difference: 0,
        logo: ""
    }

    if (state.espn.espnReport && state.espn.espnTopScorer) {
        topScorer = state.espn.espnTopScorer;
        closeOne = state.espn.espnCloseOne;
    } else if (state.sleeper.sleeperReport && state.sleeper.sleeperTopScorer) {
        topScorer = state.sleeper.sleeperTopScorer;
        closeOne = state.sleeper.sleeperCloseOne;
    }

    if (width < 575) {
        return (
            <React.Fragment>
                <Col xs={6} className="cards">
                    <p className="reportTitle">TOP SCORER</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                src={`https://whispering-woodland-11588.herokuapp.com/${topScorer.logo}`} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p className="cards__name">
                            {topScorer.name}: 
                            <br />
                            {topScorer.score}
                        </p>
                    </div>
                </Col>
                <Col xs={6} className="cards">
                    <p className="reportTitle">CLOSE ONE</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                src={`https://whispering-woodland-11588.herokuapp.com/${closeOne.logo}`} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p className="cards__name">
                            {closeOne.name}:
                            <br></br>
                            +{closeOne.difference}
                        </p>
                    </div>
                </Col>
            </React.Fragment>
        )
    } else {
        return (
            <Col className="cards">
                <p className="reportTitle">TOP SCORER</p>

                <div className='cards__outerBox'>
                    <div className='cards__innerBox'>
                        <img 
                            crossOrigin="anonymous"
                            referrerPolicy="origin" 
                            onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                            src={`https://whispering-woodland-11588.herokuapp.com/${topScorer.logo}`} 
                            alt="poop" 
                            className="cards__image" />
                    </div>
                </div>
                <div className='cards__lowerBox'>
                    <p>
                        {topScorer.name}: 
                        <br />
                        {topScorer.score}
                    </p>
                </div>

                <div className="hr"></div>

                <p className="reportTitle">CLOSE ONE</p>

                <div className='cards__outerBox'>
                    <div className='cards__innerBox'>
                        <img 
                            crossOrigin="anonymous"
                            referrerPolicy="origin" 
                            onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                            src={`https://whispering-woodland-11588.herokuapp.com/${closeOne.logo}`} 
                            alt="poop" 
                            className="cards__image" />
                    </div>
                </div>
                <div className='cards__lowerBox'>
                    <p>
                        {closeOne.name}:
                        <br></br>
                        +{closeOne.difference}
                    </p>
                </div>
            </Col>
        )
    }
}

export default Standouts;
