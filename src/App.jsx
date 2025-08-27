import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Step1 from "./components/Step1.jsx";
import Step2 from "./components/Step2.jsx";
import Step3 from "./components/Step3.jsx";
import Step4 from "./components/Step4.jsx";

function App() {
  const [step, setStep] = useState(1);
  console.log('step', step)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
    qualification: "",
    courses: [""],
    colleges: [""],
    fieldOfStudy: "",
    company: "",
    jobTitle: "",
    experience: "",
    startDate: "",
    endDate: "",
  });

  const [error, setError] = useState({});

  const nextStep = () => {
    setStep(function (previousStep) {
      return previousStep + 1;
    });
  };

  const prevStep = () => {
    setStep(function (previousStep) {
      return previousStep - 1;
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trimStart(),
    })
    setError({
      ...error,
      [event.target.name]:""
    })
    // console.log(event.target.name);
    // console.log(event.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("resumeFormData", JSON.stringify(formData));
    alert("Form submitted and saved to localStorage!");
    console.log(formData);
    setStep(1);
    setFormData({
      firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
    qualification: "",
    courses: [""],
    colleges: [""],
    fieldOfStudy: "",
    company: "",
    jobTitle: "",
    experience: "",   
    startDate: "",
    endDate: "",
    })
  };

  return (
    <div className="bg-[url('D:\Lokesh\tech-superior\step-form-react(Task1)\react-step-form-main\pictures\2d-graphic-wallpaper-with-colorful-grainy-gradients.jpg')] bg-cover bg-center bg-no-repeat flex place-content-center h-max">
      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          error={error}
          setError={setError}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          error={error}
          setError={setError}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          error={error}
          setError={setError}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default App;
