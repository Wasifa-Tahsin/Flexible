import React from "react";

const ForgetPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Forgot Password
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        <form>
          <label className="block mb-2 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="/login" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
