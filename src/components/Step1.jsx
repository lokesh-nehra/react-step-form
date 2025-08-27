import ProgressBar from "./ProgressBar";

function Step1({ formData, handleChange, nextStep, error, setError, setStep }) {
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.gender.trim()) newErrors.gender = true;
    if (!formData.phone.trim()) newErrors.phone = true;

    setError(newErrors);

    return Object.keys(newErrors).length === 0;

    // if(!formData.firstName.trim()){ }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-8 h-max mb-1 ">
      <ProgressBar currentStep={1} setStep={setStep}/>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto mt-8 h-max mb-1 ">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-teal-600 text-white px-4 py-2 rounded shadow-md">
          Introduction
        </h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-semibold mb-1">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.firstName ? "border-red-500" : "border-gray-300"
            } focus:ring-2 ${
              error.firstName ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.firstName && (
            <p className="text-red-500 text-sm">First name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-semibold mb-1">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.lastName ? "border-red-500" : "border-gray-300"
            } focus:ring-2 ${
              error.lastName ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.lastName && (
            <p className="text-red-500 text-sm mt-1">Last name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.email ? "border-red-500" : "border-gray-300"
            } focus:ring-2 ${
              error.email ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Gender<span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.gender ? "border-red-500" : "border-gray-300"
            } focus:ring-1 ${
              error.gender ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          >
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {error.gender && (
            <p className="text-red-500 text-sm mt-1">Gender is required</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block font-semibold mb-1">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.phone ? "border-red-500" : "border-gray-300"
            } focus:ring-2 ${
              error.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.phone && (
            <p className="text-red-500 text-sm mt-1">
              Phone number is required<span className="text-red-500">*</span>
            </p>
          )}
        </div>
        <div className="text-right">
          <span></span>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200"
            onClick={() => validate() && nextStep()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1;
