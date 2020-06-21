import React from "react";
import "./style.scss";

import metaImage from "./assets/meta_image.png";
import headerVid from "./assets/lively.mp4";
import logo from "./assets/SVG/logo.svg";

import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <>
      <video playsInline autoPlay muted loop poster={metaImage} id="bgvid">
        <source src={headerVid} type="video/mp4" />
      </video>

      <header className="viewport-header">
        <div className="text-center">
          <img src={logo} alt="Lively Farm Logo" className="logo" />
        </div>

        {/* SLOGAN */}
        <h1 className="display-1 text-white font-peacock my-2 my-md-5 px-2">
          Something{" "}
          <em className="font-peacock-loop underline-wavy">lively</em> coming soon...
        </h1>

        <SignUpForm />
        {/* <div>
          <a href="https://mailchi.mp/6ebfa84e1625/lively-newsletter" className="newsletter-link h3">Sign up for our newsletter!</a>
        </div> */}
      </header>
    </>
  );
}

export default App;
