/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
const Button = ({ value }) => {
  const { setResult, expression, setExpression } = useContext(CalcContext);
  const handleBtnClick = (val) => {
    if (val === "=") {
      try {
        if (expression === "") {
          throw new Error("Error");
        }
        const output = eval(expression);
        setResult(String(output));
      } catch (err) {
        setResult("Error");
      }
    } else if (val === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prev) => {
        return prev + val;
      });
    }
  };
  return (
    <button onClick={(ev) => handleBtnClick(ev.target.innerText)}>
      {value}
    </button>
  );
};

export default Button;
