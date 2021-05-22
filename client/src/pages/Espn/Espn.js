import React from "react";

import EspnGuide from './EspnGuide';
// import YearInput from '../../components/YearInput';
import Espn2 from './Espn2';
import Espn1 from './Espn1';

import OptionalInputs from '../../components/OptionalInputs';
import GenerateReportButton from '../../components/GenerateReportButton';

const Espn = () => {
    return (
        <div className="input input--espn">
            <EspnGuide />
            {/* <YearInput platform={'espn'} /> */}
            <Espn1 />
            <Espn2 />

            <OptionalInputs platform={'espn'} />
            <GenerateReportButton reportPage={'weekly-report-espn'} />
        </div>
    )
}

export default Espn;