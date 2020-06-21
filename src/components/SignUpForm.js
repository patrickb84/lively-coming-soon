import React from "react";

import Mailchimp from "../assets/react-mailchimp-form/src/index";

// https://farm.us10.list-manage.com/subscribe/post?u=67aef0cfeee635141b9b14ac7&amp;id=7e79843ef2

const SignUpForm = () => {
  return (
    <div>
      <label
        htmlFor="mailchimp"
        className="pb-2 font-weight-bold text-white mailchimp-label"
        style={{ fontSize: 22 }}
      >
        Join the email list for updates & goodies!
      </label>
      <Mailchimp
        action="https://farm.us10.list-manage.com/subscribe/post?u=67aef0cfeee635141b9b14ac7&amp;id=7e79843ef2"
        //Adding multiple fields:
        fields={[
          {
            name: "EMAIL",
            placeholder: "Enter your email",
            type: "email",
            required: true,
          },
        ]}
        // Change predetermined language
        // messages={{
        //   sending: "Sending...",
        //   success: "Thank you for subscribing!",
        //   error: "An unexpected internal error has occurred.",
        //   empty: "You must write an e-mail.",
        //   duplicate: "Too many subscribe attempts for this email address",
        //   button: "Subscribe!",
        // }}
        // Add a personalized class
        className="input-group"
      />
    </div>
  );
};

// const SignUpForm = () => {
//   const [email, setEmail] = useState("");

//   const handleUpdateValue = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ email });
//     window.location.href = "https://mailchi.mp/6ebfa84e1625/lively-newsletter";
//   };

//   return (
//     <form id="sign-up-form" className="px-3 w-100" onSubmit={handleSubmit}>
//       <label
//         htmlFor="email"
//         className="pb-2 font-weight-bold text-white"
//         style={{ fontSize: 22 }}
//       >
//         Sign up for the newsletter!
//       </label>
//       <div className="input-group d-flex mx-auto" style={{ maxWidth: "500px" }}>
//         <input
//           id="email"
//           type="email"
//           className="form-control"
//           placeholder="Enter your email"
//           aria-label="Your email"
//           aria-describedby="button-signup"
//           value={email}
//           name="email"
//           onChange={handleUpdateValue}
//           style={{ paddingTop: 10, paddingBottom: 10 }}
//         />
//         <button
//           className="btn btn-primary px-3 text-white"
//           type="submit"
//           id="button-signup"
//         >
//           <i className="fas fa-paper-plane fa-lg" />
//         </button>
//       </div>
//     </form>
//   );
// };

export default SignUpForm;
