import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createSleeperWeeklyReport } from '../../actions/Sleeper';
import Report from "./Report"

const ComponentToPrint = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Report />
    </div>
    )
}

const SleeperWeeklyReport = (props) => {
  const componentRef = React.createRef();
  const dispatch = useDispatch()

  if (props.location.pathname === "/weekly-report-sleeper") {
    dispatch(createSleeperWeeklyReport())
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
      <Link to="/overall-report-sleeper">
        <button className="btn btn--sleeper">
          Click here for the overall report!
        </button>
      </Link>
      </div>
    </>
  )
}

export default SleeperWeeklyReport;
