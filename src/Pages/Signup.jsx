import React, { useState } from "react";
import Copywright from '../Components/Copywright';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API request logic here
    console.log(formData);
  };

  return (
    <>
        <div className='h-[5rem]'></div>
      <form
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg m-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-8 flex flex-col items-center ">
          <span className="text-blue-600 text-3xl font-bold">Frame Stack</span>
          <h2 className="text-xl font-semibold mt-2 text-gray-800 text-center">Create Your Agency Account</h2>
          <p className="text-sm text-gray-500 mt-1 text-center">Start building digital experiences for your clients!</p>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-300"
            placeholder="Your full name"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Business Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-300"
            placeholder="Your agency email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">Company Name</label>
          <input
            required
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-300"
            placeholder="e.g. PixelWave Studios"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-300"
            placeholder="Create a strong password"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            required
            type="checkbox"
            id="agreed"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="agreed" className="text-sm text-gray-700">
            I agree to the AgencyWeb Terms & Privacy Policy
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-600 text-sm">Already partnered with us?</span>
          <a href="/login" className="text-blue-600 ml-2 text-sm underline">Log In</a>
        </div>
      </form>
    <div className='h-[5rem]'></div>
    <Copywright></Copywright>
    </>
  );
};

export default Signup;
