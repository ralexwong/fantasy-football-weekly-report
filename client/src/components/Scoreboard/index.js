import React from "react";
import "./style.css";
import { Row } from "../Grid";

function Scoreboard(props) {
    return (
        <div>
            <Row>
                <p id="scoreboard">SCOREBOARD</p>
            </Row>
            <Row>
                <div id="scoreboardWeek">
                    <p>Week {props.weekNum}</p>
                </div>
            </Row>
        </div>
    );
}

export default Scoreboard;