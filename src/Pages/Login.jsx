import React, { useState } from "react";
import Nav from "../Components/nav";
import Copywright from "../Components/Copywright";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
      <>

        <div className="h-[15rem]">

        </div>
        <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-lg p-8 m-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full pricebtn"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="h-[10rem]">

    </div>
      <Copywright></Copywright>
      </>
  );
};

export default Login;
