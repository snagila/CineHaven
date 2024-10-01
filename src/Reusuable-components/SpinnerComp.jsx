import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerComp = () => {
  return (
    <>
      <div className="text-center pt-5">
        <Spinner animation="border" role="status" />
      </div>
    </>
  );
};

export default SpinnerComp;
