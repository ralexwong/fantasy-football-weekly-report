import React from "react";
import { useSelector } from 'react-redux';

const Title = () => {
    const state = useSelector((state) => state)

    let title
    let caption

    if (state.sleeper.sleeperReport && state.sleeper.sleeperTitle) {
        title = state.sleeper.sleeperTitle
    } else if (state.espn.espnReport && state.espn.espnTitle) {
        title = state.espn.espnTitle
    } else {
        title = "DIRTY TRIBUNE"
    }

    if (state.sleeper.sleeperReport && state.sleeper.sleeperCaption) {
        caption = state.sleeper.sleeperCaption
    } else if (state.espn.espnReport && state.espn.espnCaption) {
        caption = state.espn.espnCaption
    } else {
        caption = "Fantasy football is about proving that you are better than your friends"
    }

    return (
        <>
            <p className="reportTitle reportTitle__header">{title}</p>
            <p className="reportCaption">{caption}</p>
        </>
    )
}

export default Title;