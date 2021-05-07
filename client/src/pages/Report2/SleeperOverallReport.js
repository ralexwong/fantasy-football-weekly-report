import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createSleeperOverallReport } from '../../actions/Sleeper';
import Report2 from "./Report2"

const ComponentToPrint = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Report2 />
    </div>
    )
}

const SleeperOverallReport = (props) => {
  const componentRef = React.createRef();
  const dispatch = useDispatch()

  if (props.location.pathname === "/overall-report-sleeper") {
    dispatch(createSleeperOverallReport())
  }

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button className="btn btn--sleeper" onClick={() => exportComponentAsPNG(componentRef)}>
          Click here for your report to be converted to an image!
        </button>
      </div>
      <ComponentToPrint ref={componentRef} />
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <Link to="/weekly-report-sleeper">
        <button className="btn btn--sleeper">
          Click here for the weekly report!
        </button>
      </Link>
      </div>
    </>
  )
}

export default SleeperOverallReport;
