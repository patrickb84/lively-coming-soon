import React, { useState } from "react";

// https://farm.us10.list-manage.com/subscribe/post?u=67aef0cfeee635141b9b14ac7&amp;id=7e79843ef2
const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const handleUpdateValue = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
    window.location.href = "https://mailchi.mp/6ebfa84e1625/lively-newsletter";
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
      <div className="input-group d-flex mx-auto" style={{ maxWidth: "500px" }}>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Enter your email"
          aria-label="Your email"
          aria-describedby="button-signup"
          value={email}
          name="email"
          onChange={handleUpdateValue}
          style={{ paddingTop: 10, paddingBottom: 10 }}
        />
        <button
          className="btn btn-primary px-3 text-white"
          type="submit"
          id="button-signup"
        >
          <i className="fas fa-paper-plane fa-lg" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
