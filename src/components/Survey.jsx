import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./esi/Navbar";
import Swal from "sweetalert2";
import Sidebar from "./esi/Sidebar";

const Survey = () => {
  const [section, setSection] = useState(1);
  const [data, setData] = useState(null);
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [formData, setFormData] = useState({
    nik: "",
    periode: "",
    unit: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/esi/kuisioner"
        );
        console.log(response.data.kuisioner);
        setData(response.data.kuisioner);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setSection(2);
  };

  const handlePrev = () => {
    setSection(1);
  };

  const validateForm = () => {
    const allFieldsEmpty = Object.values(formData).every(
      (value) => value.trim() === ""
    );
    setIsFormValid(!allFieldsEmpty);
  };

  const handleInputFirstChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    validateForm();
  };

  const handleQuestionAnswerSecondChange = (questionId, answerId) => {
    const updatedQuestionAnswers = questionAnswers.map((questionAnswer) => {
      if (questionAnswer.questionId === questionId) {
        return { ...questionAnswer, answerId };
      }
      return questionAnswer;
    });

    const existingQuestionAnswer = updatedQuestionAnswers.find(
      (questionAnswer) => questionAnswer.questionId === questionId
    );

    if (!existingQuestionAnswer) {
      updatedQuestionAnswers.push({ questionId, answerId });
    }

    setQuestionAnswers(updatedQuestionAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      questionAnswers: questionAnswers,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/esi/kuisioner/store",
        updatedFormData
      );

      if (response.data.message == "success") {
        Swal.fire({
          icon: "success",
          title: "Terima kasih",
          text: "Silakan download slip gaji anda!",
          showConfirmButton: false,
          footer: `<a href="http://localhost:8000/api/esi/slip/download?t=${response.data.token}" target="_blank">Download Slip Gaji</a>`,
        });
        window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: response.data.message,
          text: response.data.data,
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.response);
      Swal.fire({
        icon: "error",
        title: error.response.data.responsemessage,
        text: error.response.data.response.data,
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Form Section */}
      <section className="md:py-14 py-8 flex-grow">
        <div className="lg:max-w-[55%] md:max-w-[65%] mx-auto px-10 p-6 bg-gray-100/50 rounded-md shadow-lg">
          <form className="" onSubmit={handleSubmit}>
            {section === 1 ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">Data Diri</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    NIK
                  </label>
                  <input
                    type="text"
                    name="nik"
                    value={formData.nik || ""}
                    onChange={handleInputFirstChange}
                    className="w-full border-gray-300 border rounded px-3 py-2"
                    autoFocus
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Periode
                  </label>
                  <input
                    type="month"
                    name="periode"
                    value={formData.periode || ""}
                    onChange={handleInputFirstChange}
                    className="w-full border-gray-300 border rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Unit
                  </label>
                  <select
                    name="unit"
                    value={formData.unit || ""}
                    onChange={handleInputFirstChange}
                    className="w-full border-gray-300 border rounded px-3 py-2"
                    required
                  >
                    <option disabled-selected="true" hidden>
                      --Pilih Unit--
                    </option>
                    <option value="CTG">Coating</option>
                    <option value="ADH">Adhesive</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex  justify-between items-center gap-1"
                    disabled={!isFormValid}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width={20}
                      height={20}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Survey Kepuasan Karyawan
                </h2>
                {/* Question */}
                {data ? (
                  <>
                    {data.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        <h3 className="font-semibold">
                          {idx + 1}. {item.question}
                        </h3>
                        {item.pilihan.map((opt) => (
                          <div key={opt.id} className="flex items-center mb-2">
                            <input
                              type="radio"
                              name={`jawaban${idx}[]`}
                              id={`question-${item.id}-${opt.id}`}
                              checked={
                                questionAnswers.find(
                                  (qa) =>
                                    qa.questionId === item.id &&
                                    qa.answerId === opt.pilihan
                                ) || ""
                              }
                              onChange={() =>
                                handleQuestionAnswerSecondChange(
                                  item.id,
                                  opt.pilihan
                                )
                              }
                              className="mr-2"
                              required
                            />
                            <label htmlFor={`question-${item.id}-${opt.id}`}>
                              {opt.pilihan}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-center">Loading...</p>
                )}
                {/* Question */}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="bg-sky-900 font-semibold hover:bg-sky-950 text-white py-2 px-4 rounded flex  justify-between items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width={20}
                      height={20}
                    >
                      <path d="M19 12H6M12 5l-7 7 7 7" />
                    </svg>
                    Prev
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 font-semibold hover:bg-blue-700 text-white py-2 px-4 rounded flex justify-between items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={20}
                      height={20}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 px-6">
        <div className="max-w-md mx-auto text-center text-gray-600">
          copyright &copy; 2023 by Unit Coating and Adhesive
        </div>
      </footer>
    </div>
  );
};

export default Survey;
