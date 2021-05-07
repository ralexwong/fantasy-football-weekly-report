import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createEspnWeeklyReport } from '../../actions/Espn';
import Report from "./Report"

const ComponentToPrint = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Report />
    </div>
    )
}

const EspnWeeklyReport = (props) => {
  const componentRef = React.createRef();
  const dispatch = useDispatch()

  if (props.location.pathname === "/weekly-report-espn") {
    dispatch(createEspnWeeklyReport())
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
      <Link to="/overall-report-espn">
        <button className="btn btn--espn">
          Click here for the overall report!
        </button>
      </Link>
      </div>
    </>
  )
}

export default EspnWeeklyReport;
