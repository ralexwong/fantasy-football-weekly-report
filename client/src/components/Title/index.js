import React from "react";
import "./style.css";
import { Row } from "../Grid";

function Title() {
    return (
        <Row>
            <div id="titleDiv">
                <div>
                    <p id="title">DIRTY TRIBUNE</p>
                </div>

                <div>
                    <p id="caption">Welcome to the shitshow</p>
                </div>
            </div>
        </Row>
    )
}

export default Title;