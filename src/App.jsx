import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
function App() {
  const [Signup, setSignup] = useState(false);
  const [error, seterror] = useState("");
  const [Form, setForm] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { firstname, email, password, confirmpassword } = Form;
  function HandleSubmit(e) {
    e.preventDefault();
    if (!firstname && !email && !password) {
      seterror("Fill-up the form");
      return;
    }
    if (!email) {
      seterror("Enter your email");
      return;
    }
    if (!password) {
      seterror("Password must required");
      return;
    }
    if (Signup && !confirmpassword) {
      seterror("Confirmpassword must required");
      return;
    }
    if (password.length <= 8) {
      seterror("Password must be 8 character");
      return;
    }
    if (Signup && password !== confirmpassword) {
      seterror("Confirmpassword must be same password");
      return;
    }
    if (Signup && !/[!@#$%^&*()<>",.]/.test(password)) {
      seterror("Password must be contains any special character");
      return;
    }
    if (Signup && !/[A-Z]/.test(password)) {
      seterror("Password must be contain any capital letter");
      return;
    }
    if (Signup && !/[@]/.test(email)) {
      seterror("Enter your vaild email (example:zxy@gmail.com)");
      return;
    }
    if (email && password) {
      alert("Successful Sign in");
    }
    setForm({
      firstname: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    seterror("");
  }
  function HandleChange(e) {
    setForm((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="h-screen w-screen bg-gray-300 relative flex items-center justify-center">
      <div className="flex justify-between shadow-md h-full sm:w-3/4  bg-white /">
        <div id="left" className="p-5 border flex-1">
          <div
            id="login-main"
            className="sm:w-full lg:w-5/6 m-auto flex flex-col gap-3"
          >
            <div id="welcome info" className="text-center mb-5">
              <h1 className="text-2xl font-semibold">
                Welcome {Signup ? "" : "back"}
              </h1>
              <p className="text-gray-500 font-medium">
                The faster you fill up. the faster you get a ticket
              </p>
            </div>
            <form className="flex flex-col" onSubmit={HandleSubmit}>
              {Signup && (
                <>
                  <label className="font-semibold my-3">Name</label>
                  <input
                    className="border py-2 pl-1"
                    type="text"
                    placeholder="Enter your name"
                    value={firstname}
                    name="firstname"
                    onChange={HandleChange}
                  />
                </>
              )}
              <label className="font-semibold my-3">Email</label>
              <input
                className="border py-2 pl-1"
                type="text"
                placeholder="Enter your email"
                value={email}
                name="email"
                onChange={HandleChange}
              />
              <label className="font-semibold my-3">Password</label>
              <input
                className="border py-2 pl-1"
                type="password"
                placeholder="Enter your password"
                value={password}
                name="password"
                onChange={HandleChange}
              />
              {Signup && (
                <>
                  <label className="font-semibold my-3">Confirm password</label>
                  <input
                    className="border py-2 pl-1"
                    type="password"
                    placeholder="Enter your confirm password"
                    value={confirmpassword}
                    name="confirmpassword"
                    onChange={HandleChange}
                  />
                </>
              )}
              <div className="text-sm text-red-500 my-2">{error}</div>
              <div id="rem-box" className="flex justify-between my-4 flex-wrap">
                <div id="remember" className="flex gap-1">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <p className="cursor-pointer">Forgot Password</p>
              </div>
              <button className="bg-black text-white py-2">
                {Signup ? "Sign up" : "Sign in"}
              </button>
              <div className="my-4 border py-2 cursor-pointer">
                {Signup ? (
                  <p className="flex items-center justify-center gap-2">
                    <FcGoogle />
                    <span> Sign up with Google</span>
                  </p>
                ) : (
                  <p className="flex items-center justify-center gap-2">
                    <FcGoogle />
                    <span>Sign in with Google</span>
                  </p>
                )}
              </div>
            </form>
          </div>
          <p className="text-center align-bottom">
            Don't have an account ?{" "}
            <span
              className="cursor-pointer font-semibold"
              onClick={() => {
                setSignup(!Signup);
                seterror("");
                setForm({
                  firstname: "",
                  email: "",
                  password: "",
                  confirmpassword: "",
                });
              }}
            >
              {Signup ? "Sign in" : "Sign up"}
            </span>
          </p>
        </div>
        <div id="right" className="hidden md:block w-full flex-1">
          <img
            src="https://images.pexels.com/photos/15919234/pexels-photo-15919234/free-photo-of-modern-technology-home-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
