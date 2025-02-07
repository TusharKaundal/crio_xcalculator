import { createContext, useState } from "react";

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const providerValue = {
    result,
    setResult,
    expression,
    setExpression,
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
