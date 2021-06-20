import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createSleeperOverallReport } from '../../actions/Sleeper';
import Report2 from "./Report2"

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ padding: "1rem" }}>
      <Report2 />
    </div>
    )
})

const SleeperOverallReport = (props) => {
  const componentRef = useRef(null)
  const dispatch = useDispatch();

  dispatch(createSleeperOverallReport())

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button className="btn btn--sleeper u-margin-top" onClick={() => exportComponentAsPNG(componentRef)}>
          Click here to download your report as an image!
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