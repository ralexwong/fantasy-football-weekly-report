import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createEspnOverallReport } from '../../actions/Espn';
import Report2 from "./Report2"

const ComponentToPrint = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Report2 />
    </div>
    )
}

const EspnOverallReport = (props) => {
  const componentRef = React.createRef();
  const dispatch = useDispatch()

  if (props.location.pathname === "/overall-report-espn") {
    dispatch(createEspnOverallReport())
  }
  
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button className="btn btn--espn" onClick={() => exportComponentAsPNG(componentRef)}>
          Click here for your report to be converted to an image!
        </button>
      </div>
      <ComponentToPrint ref={componentRef} />
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <Link to="/weekly-report-espn">
        <button className="btn btn--espn">
          Click here for the weekly report!
        </button>
      </Link>
      </div>
    </>
  )
}

export default EspnOverallReport;
