function ProgressBar({ currentStep }) {
  return (
    <div className="flex justify-between items-center mb-8 px-8 ml-11">
      {[1, 2, 3, 4].map((step, index) => (
        <div key={step} className="flex items-center w-full">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${
              currentStep > step
                ? "bg-green-500"
                : currentStep === step
                ? "bg-purple-900"
                : "bg-gray-300"
            }`}
          >
            {step}
          </div>

          {index < 3 && (
            <div className="flex-grow h-1 bg-gray-300 mx-2 ">
              <div
                className={`h-full ${
                  currentStep > step ? "bg-green-500 w-full" : "bg-blue-600 w-0"
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
