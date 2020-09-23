import React from 'react';
import { Link } from 'react-router-dom';

const GenerateReportButton = (props) => {
    return (
        <button className="btn btn--white">
            <Link to={props.reportPage}>Report Page</Link>
        </button>
    )
}

export default GenerateReportButton;