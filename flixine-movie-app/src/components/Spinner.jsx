import { React, useState, CSSProperties } from "react";
import { DotLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  return (
    <DotLoader
      color="#ffffff"
      cssOverride={{}}
      loading={loading}
      size={100}
      speedMultiplier={1}
    />
  );
};

export default Spinner;
