import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createSleeperWeeklyReport } from '../../actions/Sleeper';
import Report from "./Report"

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ padding: "1rem" }}>
      <Report />
    </div>
    )
})

const SleeperWeeklyReport = (props) => {
  const componentRef = useRef(null)
  const dispatch = useDispatch()

  dispatch(createSleeperWeeklyReport())

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button className="btn btn--sleeper u-margin-top" onClick={() => exportComponentAsPNG(componentRef)}>
          Click here to download your report as an image!
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
