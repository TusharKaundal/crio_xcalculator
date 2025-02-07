import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Result from "./components/Result";
import CalcProvider from "./context/CalcContext";

const btnValues = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "*"],
  ["C", 0, "=", "/"],
];

function App() {
  return (
    <CalcProvider>
      <div className="wrapper">
        <h1>React Calculator</h1>
        <Input />
        <Result />
        <div className="button_wrap">
          {btnValues.flat().map((btn, idx) => (
            <Button key={idx} value={btn} />
          ))}
        </div>
      </div>
    </CalcProvider>
  );
}

export default App;
