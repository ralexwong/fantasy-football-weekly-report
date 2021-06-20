import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createEspnWeeklyReport } from '../../actions/Espn';
import Report from "./Report"

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ padding: "1rem" }}>
      <Report />
    </div>
    )
})

const EspnWeeklyReport = (props) => {
  const componentRef = useRef(null)
  const dispatch = useDispatch()

  dispatch(createEspnWeeklyReport())
  return (
    <>        
      <div style={{ textAlign: "center" }}>
        <button className="btn btn--espn u-margin-top" onClick={() => exportComponentAsPNG(componentRef)}>
          Click here to download your report as an image!
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
