import React from 'react';
import { Link } from 'react-router-dom';

const GenerateReportButton = (props) => {
    return (
        <button style={{ width: '80%', margin: '5rem 0', fontSize: '3rem' }} className="btn btn--white">
            <Link to={props.reportPage}>Report Page &rarr;</Link>
        </button>
    )
}

export default GenerateReportButton;