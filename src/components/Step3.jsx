import ProgressBar from "./ProgressBar";

function Step3({ formData, handleChange, nextStep, prevStep, error, setError, setStep }) {
  const validate = () => {

    const newErrors = {};

    if (!formData.company.trim()) newErrors.company = true;
    if (!formData.jobTitle.trim()) newErrors.jobTitle = true;
    if (!formData.experience.trim()) newErrors.experience = true;
    if (!formData.startDate.trim()) newErrors.startDate = true;
    if (!formData.endDate.trim()) newErrors.endDate = true;


    if(formData.startDate.trim() && formData.endDate.trim() && new Date(formData.startDate) > new Date(formData.endDate)){newErrors.startDate = true; newErrors.endDate = true;}
   

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-8 h-max mb-1 ">
      <ProgressBar currentStep={3} setStep={setStep}/>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto mt-8 h-max mb-1 ">

        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-teal-600 text-white px-4 py-2 rounded shadow-md">Experience</h2>
        <div className="mb-4">
          <label htmlFor="company" className="block font-semibold mb-1">Company Name<span className="text-red-500">*</span></label>
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.company ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            } focus:ring-2`} />
            {error.company && (
            <p className="text-red-500 text-sm mt-1">Company name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="jpbTitle" className="block font-semibold mb-1">Job Title<span className="text-red-500">*</span></label>
          <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.jobTitle ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            } focus:ring-2`} />
            {error.jobTitle && (
            <p className="text-red-500 text-sm mt-1">Job Title is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="experience" className="block font-semibold mb-1">Years of Experience<span className="text-red-500">*</span></label>
          <input name="experience" type="number" value={formData.experience} onChange={handleChange} placeholder="Years of Experience" className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.experience ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            } focus:ring-2`} />
            {error.experience && (
            <p className="text-red-500 text-sm mt-1">Experience is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Start Date<span className="text-red-500">*</span></label>
          <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.startDate ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            } focus:ring-2`} />
            {error.startDate && (
            <p className="text-red-500 text-sm mt-1">Start Date is required</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-1">End Date<span className="text-red-500">*</span></label>
          <input name="endDate" type="date" value={formData.endDate} onChange={handleChange} className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.endDate ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            } focus:ring-2`} />
            {error.endDate && (
            <p className="text-red-500 text-sm mt-1">End Date is required</p>
          )}
        </div>
        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200">Back</button>
          <button onClick={() => validate() && nextStep()} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Step3;

