import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

function Result() {
  const { result } = useContext(CalcContext);
  return <>{result && <div className="result">{result}</div>}</>;
}

export default Result;
