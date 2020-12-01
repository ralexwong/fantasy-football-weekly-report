import React from 'react';
import { Link } from 'react-router-dom';

const GenerateReportButton = (props) => {
    return (
        <Link to={props.reportPage}>
            <button style={{ width: '80%', margin: '5rem 0', fontSize: '3rem' }} className="btn btn--white">
                Report Page &rarr;
            </button>
        </Link>
    )
}

export default GenerateReportButton;