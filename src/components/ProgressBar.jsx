function ProgressBar({ currentStep, setStep }) {
  // const handleClick = (step) => {
  //   console.log(typeof(step));
  //   setStep(step);
  // };
  return (
    <div className="flex justify-between items-center mb-8 px-8 ml-11">
      {[1, 2, 3, 4].map((step, index) => (
        <div key={index} className="flex items-center w-full">
          <button
            type="submit"
            onClick={() =>setStep(step)}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${
              currentStep > step
                ? "bg-purple-950"
                : currentStep === step
                ? "bg-purple-950"
                : "bg-gray-400"
            }`}
          >
            {step}
          </button>

          {index < 3 && (
            <div className="flex-grow h-1 bg-gray-300 mx-2 ">
              <div
                className={`h-full ${
                  currentStep > step
                    ? "bg-purple-900 w-full"
                    : "bg-gradient-to-r from-gray-200 to-slate-600 "
                }`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
