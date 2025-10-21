import React from "react";
import logo from '../assets/logo.png'
import Button from "../components/ui/Button";
import { NavLink } from "react-router";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <img src={logo} alt="" />
       

        <form>
          <div className="mb-4 mt-5">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

         <div className="flex justify-between items-center mb-2">
           <div className="flex items-center gap-2 ">
            <input className="" type="checkbox" name="checkbox" id="" />
          <p>Remember me</p>
          </div>
          <div>
            <NavLink to='/forgotPassword' className="underline text-purple-500">  Forget Password?</NavLink>
          </div>
         </div>

<Button style='w-full bg-blue-500 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-600 transition'   text='Login'>
           
          </Button>
         
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <NavLink to='/signUp' className="text-blue-500 hover:underline">
            Sign up
         </NavLink>
          
        </p>
      </div>
    </div>
  );
};

export default Login;
