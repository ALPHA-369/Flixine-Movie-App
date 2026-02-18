import { React, CSSProperties } from "react";
import { DotLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  return (
    <DotLoader
      color="#ffffff"
      cssOverride={{}}
      loading={loading}
      size={70}
      speedMultiplier={1}
    />
  );
};

export default Spinner;
