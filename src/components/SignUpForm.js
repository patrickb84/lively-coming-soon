import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const handleUpdateValue = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };

  return (
    <form id="sign-up-form" className="px-3 w-100" onSubmit={handleSubmit}>
      <label
        htmlFor="email"
        className="pb-2 font-weight-bold text-white"
        style={{ fontSize: 22 }}
      >
        Sign up for the newsletter!
      </label>
      <div
        className="input-group input-group-lg- d-flex mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <input
          id="email"
          type="email"
          className="form-control p-3"
          placeholder="Your email"
          aria-label="Your email"
          aria-describedby="button-signup"
          value={email}
          name="email"
          onChange={handleUpdateValue}
        />
        <button className="btn btn-primary" type="submit" id="button-signup">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
