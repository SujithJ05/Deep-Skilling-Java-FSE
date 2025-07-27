import "./Stylesheets/mystyle.css";
import { CalculatorScore } from "./Component/CalculatorScore";

function App() {
  return (
    <div>
      <CalculatorScore
        Name={"ABC"}
        School={"ABC High School"}
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
