import React from 'react';
import { Link } from 'react-router-dom';

const GenerateReportButton = (props) => {
    return (
        <button>
            <Link to={props.reportPage}>Report Page</Link>
        </button>
    )
}

export default GenerateReportButton;