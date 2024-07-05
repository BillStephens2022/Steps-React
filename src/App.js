import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  
  const handlePrevClick = () => {
    setStep((prevStep) => prevStep - 1);
    console.log(step);
  }

  const handleNextClick = () => {
    setStep((prevStep) => prevStep + 1);
    console.log(step);
  }




  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">Step {step}: {messages[step-1]}</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevClick}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
