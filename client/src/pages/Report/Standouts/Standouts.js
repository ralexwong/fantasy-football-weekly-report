import React from 'react';
import { useSelector } from 'react-redux';

const Standouts = () => {   
    const state = useSelector((state) => state)

    let topScorer = {
        name: "",
        score: 0,
        logo: "",
    }

    let closeOne = {
        name: "",
        difference: 0,
        logo: "",
    }


    if (state.espn.espnReport && state.espn.espnTopScorer) {
        topScorer = state.espn.espnTopScorer;
        closeOne = state.espn.espnCloseOne;
    } else if (state.sleeper.sleeperReport && state.sleeper.sleeperTopScorer) {
        topScorer = state.sleeper.sleeperTopScorer;
        closeOne = state.sleeper.sleeperCloseOne;
    }
     

    return (
        <div className="cardsContainer">
            <div>
                <p className="reportTitle">TOP SCORER</p>

                <div className='cards'>
                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img
                                crossOrigin="anonymous"
                                referrerPolicy="origin"
                                onError={(event) => event.target.setAttribute("src", "./images/nfl-logo.jpg")}
                                src={topScorer.logo}
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
                </div>
            </div>

            <div>
                <p className="reportTitle">CLOSE ONE</p>

                <div className='cards'>
                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img
                                crossOrigin="anonymous"
                                referrerPolicy="origin"
                                onError={(event) => event.target.setAttribute("src", "./images/nfl-logo.jpg")}
                                src={closeOne.logo}
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
                </div>
            </div>
        </div>
    )
}

export default Standouts;
