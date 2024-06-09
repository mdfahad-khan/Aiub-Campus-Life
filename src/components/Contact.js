import React, { useState } from "react";
import Banner5 from "../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    image: null,
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (formData.name.trim() === "") {
      newFormErrors.name = "Name is required";
      isValid = false;
    } else {
      const minNameLength = 3;
      const maxNameLength = 50;
      if (
        formData.name.trim().length < minNameLength ||
        formData.name.trim().length > maxNameLength
      ) {
        newFormErrors.name = `Name must be between ${minNameLength} and ${maxNameLength} characters`;
        isValid = false;
      }
    }

    if (formData.message.trim() === "") {
      newFormErrors.message = "Message is required";
      isValid = false;
    }

    if (formData.subject.trim() === "") {
      newFormErrors.subject = "Subject is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newFormErrors.email = "Email is required";
      isValid = false;
    } else {
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newFormErrors.email = "Invalid email format";
        isValid = false;
      }

      const maxEmailLength = 25;
      if (formData.email.trim().length > maxEmailLength) {
        newFormErrors.email = `Email must be ${maxEmailLength} characters or less`;
        isValid = false;
      }

      const allowedDomain = "gmail.com";
      if (!formData.email.trim().endsWith(`@${allowedDomain}`)) {
        newFormErrors.email = `Email must be from the domain ${allowedDomain}`;
        isValid = false;
      }

      const blacklistedDomains = ["example.net", "example.org"];
      if (blacklistedDomains.includes(formData.email.trim().split("@")[1])) {
        newFormErrors.email = "Email from this domain is not allowed";
        isValid = false;
      }
    }

    if (!isValid) {
      setFormErrors(newFormErrors);
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("image", imageFile);
    formDataObj.append("message", formData.message);

    try {
      setShowToast(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-[#F3F4F6]">
      <div className="bg-white mt-10  h-[480px] rounded shadow-md w-[1000px] flex flex-row">
        <div className="w-1/2 h-full hidden mt-10 md:block">
          <img src={Banner5} alt="signup" className="object-cover h-[400px]" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold  mb-1 text-center text-[#3B82F6]">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg">
                Name{" "}
                {formErrors.name && (
                  <span className="text-red-500 text-sm">
                    {formErrors.name}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-1 border rounded"
              />
            </div>
            <div>
              <label className="block text-lg">
                Email{" "}
                {formErrors.email && (
                  <span className="text-red-500 text-sm">
                    {formErrors.email}
                  </span>
                )}
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-1 border rounded"
              />
            </div>

            <div>
              <label className="block text-lg">
                Subject{" "}
                {formErrors.subject && (
                  <span className="text-red-500 text-sm">
                    {formErrors.subject}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-1 border rounded"
              />
            </div>
            <div>
              <label className="block text-lg">
                Message{" "}
                {formErrors.message && (
                  <span className="text-red-500 text-sm">
                    {formErrors.message}
                  </span>
                )}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-1 border rounded resize-none h-3"
                style={{ height: "65px" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
