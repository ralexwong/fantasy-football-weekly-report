import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children, id, style }) {
  return <div style={style ? style : ""} id={id ? id : ""} className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ className, children, id, style }) {
  return <div id={id ? id : ""} className={className ? className : "row"}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ className, children, id }) {
  return (
    <div id={id ? id : ""}  className={className ? className : ""}>
      {children}
    </div>
  );
}
