import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Input = () => {
  const { expression, setExpression } = useContext(CalcContext);
  return (
    <input
      type="text"
      style={{ marginBottom: "20px" }}
      value={expression}
      onChange={(ev) => setExpression(ev.target.value)}
    />
  );
};

export default Input;
