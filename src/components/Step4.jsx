import ProgressBar from "./ProgressBar";

function Step4({ formData, prevStep, handleSubmit, setStep }) {
  return (
    // <div  className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto mt-8 h-max mb-1 ">
    //   <h2  className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-teal-600 text-white px-4 py-2 rounded shadow-md">Review Your Details</h2>
    //   {Object.entries(formData).map(([key, value]) => (
    //     <p key={key}><strong>{key}:</strong> {value}</p>
    //   ))}
    //   <button className="" onClick={prevStep}>Back</button>
    //   <button onClick={handleSubmit}>Submit</button>
    // </div>

    <div className="relative mt-8 h-max mb-1 ">
      <div className="mx-auto w-4/6 max-w-full">
        <ProgressBar currentStep={4} setStep={setStep}/>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-lg mt-10 mb-1" style={{ width: '794px', height: '930px' }}>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 ">Resume Preview</h1>
          <p className="text-gray-500">👉Please review your information before submitting👈</p>
        </div>

        {/* personal information  */}
        <section className="mb-8 px-2 bg-gradient-to-l  from-yellow-50 rounded border-y-2 drop-shadow-sm ">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-blue-700">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">First Name</p>
              <p className="font-medium text-gray-900">{formData.firstName || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Last Name</p>
              <p className="font-medium text-gray-900">{formData.lastName || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">E-mail</p>
              <p className="font-medium text-gray-900">{formData.email || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gender</p>
              <p className="font-medium text-gray-900">{formData.gender || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium text-gray-900">{formData.phone || "—"}</p>
            </div>
          </div>
        </section>



        {/* Education  */}
        <section className="mb-8 px-2 bg-gradient-to-l from-yellow-50 rounded border-y-2 drop-shadow-sm">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-blue-700">Education</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Qualification</p>
              <p className="font-medium text-gray-900">{formData.qualification || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Course</p>
              <p className="font-medium text-gray-900">{formData.courses || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">College</p>
              <p className="font-medium text-gray-900">{formData.colleges || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Field of Study</p>
              <p className="font-medium text-gray-900">{formData.fieldOfStudy || "—"}</p>
            </div>
          </div>
        </section>

        {/* Experience  */}
        <section  className="mb-8 px-2 bg-gradient-to-l from-yellow-50 rounded border-y-2 drop-shadow-sm">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-blue-700">Experience</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Company Name</p>
              <p className="font-medium text-gray-900">{formData.company || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Job Title</p>
              <p className="font-medium text-gray-900">{formData.jobTitle || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Years of experience</p>
              <p className="font-medium text-gray-900">{formData.experience || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Start Date</p>
              <p className="font-medium text-gray-900">{formData.startDate || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">End Date</p>
              <p className="font-medium text-gray-900">{formData.endDate || "—"}</p>
            </div>
          </div>
        </section>


        {/* Navigation Buttons  */}
        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200">
            Back
          </button>
          <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default Step4;
