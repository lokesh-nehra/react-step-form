import ProgressBar from "./ProgressBar";

function Step2({  formData,  handleChange,  nextStep,  prevStep,  setFormData,  error,  setError, setStep}) {
  const validate = () => {
    const newErrors = {};

    if (!formData.qualification.trim()) {
      newErrors.qualification = true;
    }
    // if (!formData.courses.trim()) newErrors.courses = true;
    if (
      !formData.courses.length ||
      formData.courses.some((course) => course.trim() === "")
    ) {
      newErrors.courses = true;
    }
    if (
      !formData.colleges.length ||
      formData.colleges.some((college) => college.trim() === "")
    ) {
      newErrors.colleges = true;
    }
    if (!formData.fieldOfStudy.trim()) {
      newErrors.fieldOfStudy = true;
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleCourseChange = (index, value) => {
    const updatedCourses = [...formData.courses];
    updatedCourses[index] = value;
    setFormData({ ...formData, courses: updatedCourses });
  };

  const addCourse = () => {
    setFormData({ ...formData, courses: [...formData.courses, ""] });
  };

  const handleCollegeChange = (index, value) => {
    const updatedColleges = [...formData.colleges];
    updatedColleges[index] = value;
    setFormData({ ...formData, colleges: updatedColleges });
  };

  const addCollege = () => {
    setFormData({ ...formData, colleges: [...formData.colleges, ""] });
  };

  const removeCourse = (indexToRemove) => {
    const updatedCourses = formData.courses.filter((_,index) =>( index !== indexToRemove));
    setFormData({ ...formData, courses: updatedCourses });
  }

  const removeCollege = (indexToRemove) => {
    const updatedCourses = formData.colleges.filter((_,index) =>( index !== indexToRemove));
    setFormData({ ...formData, colleges: updatedCourses });
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-8 h-max mb-1 ">
      <ProgressBar currentStep={2} setStep={setStep}/>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto mt-8 h-max mb-1 ">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-teal-600 text-white px-4 py-2 rounded shadow-md">
          Education
        </h2>
        <div className="mb-4">
          <label htmlFor="qualification" className="block font-semibold mb-1">
            Qualification<span className="text-red-500">*</span>
          </label>
          <input
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Qualification"
            className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.qualification ? "border-red-500" : "border-gray-300"
            } focus:ring-2 ${
              error.qualification ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.qualification && (
            <p className="text-red-500 text-sm mt-1 flex justify-end">
              Qualification is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="course" className="block font-semibold mb-1">
            Course<span className="text-red-500">*</span>
          </label>
          {formData.courses.map((course, index) => (
            <div key={index} className="relative">
              <input
                name="course"
                // key={index}
                value={course}
                onChange={(e) => {
                  handleCourseChange(index, e.target.value);
                }}
                placeholder={`Course ${index + 1}`}
                className={`w-full px-4 py-2 border rounded mb-1 shadow-sm focus:outline-none ${
                  error.courses ? "border-red-500" : "border-gray-300"
                } focus:ring-2 ${
                  error.courses ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
               {index > 0 && (
                <button type="button" onClick={()=>(removeCourse(index))}  className="absolute right-3 top-1 text-gray-400 hover:text-zinc-800 font-mono text-2xl">x</button>
               )}
            </div>
          ))}
          <div className="flex justify-between">
            <button
              onClick={addCourse}
              type="button"
              className="text-blue-600 font-medium mb-1 text-sm mt-1 hover:underline"
            >
              + Add more fields
            </button>
            {error.courses && (
              <p className="text-red-500 text-sm mt-1">Course is required</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="college" className="block font-semibold mb-1">
            College<span className="text-red-500">*</span>
          </label>
          {formData.colleges.map((college, index) => (
            <div key={index} className="relative" >
              <input
                name="college"
                value={college}
                onChange={(e) => {
                  handleCollegeChange(index, e.target.value);
                }}
                placeholder={`College ${index + 1}`}
                className={`w-full px-4 py-2 mb-1 border rounded shadow-sm focus:outline-none ${
                  error.colleges ? "border-red-500" : "border-gray-300"
                } focus:ring-2 ${
                  error.colleges ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {index > 0 && (
                <button onClick={() => removeCollege(index)} className="absolute top-1 right-3 text-gray-400 hover:text-zinc-800 text-2xl font-mono">x</button>
              )}
            </div>
          ))}
          <div className="flex justify-between">
            <button
              onClick={addCollege}
              type="button"
              className="text-blue-600 font-medium text-sm mt-1 hover:underline"
            >
              + Add more fields
            </button>
            {error.colleges && (
              <p className="text-red-500 text-sm mt-1">College is required</p>
            )}
          </div>
        </div>

        <div className="mb-10">
          <label htmlFor="fieldOfStudy" className="block font-semibold mb-1">
            Field of Study<span className="text-red-500">*</span>
          </label>
          <input
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            placeholder="Field of study"
            className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${
              error.fieldOfStudy ? "border-red-500" : "border-gray-300"
            } focus:ring-2 ${
              error.fieldOfStudy ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.fieldOfStudy && (
            <p className="text-red-500 text-sm mt-1 flex justify-end">
              Field of study is required
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200"
            onClick={prevStep}
          >
            Back
          </button>
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

export default Step2;
