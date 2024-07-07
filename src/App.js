import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevClick = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleNextClick = () => {
    if (step < 3) setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              disabled={step === 1}
              style={{
                backgroundColor: step === 1 ? "gray" : "#7950f2",
                color: "#fff",
                cursor: step === 1 ? "not-allowed" : "pointer",
              }}
              onClick={handlePrevClick}
            >
              Previous
            </button>
            <button
              disabled={step === 3}
              style={{
                backgroundColor: step === 3 ? "gray" : "#7950f2",
                color: "#fff",
                cursor: step === 3 ? "not-allowed" : "pointer",
              }}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
