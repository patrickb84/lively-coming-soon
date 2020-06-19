import React from "react";
import "./style.scss";

import goatRose from "./assets/lamine-bendib-Ep-jQikE3-w-unsplash.jpg";
import headerVid from "./assets/lively.mp4";
import logo from "./assets/SVG/logo.svg";

import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <>
      <video playsInline autoPlay muted loop poster={goatRose} id="bgvid">
        <source src={headerVid} type="video/mp4" />
      </video>

      <header className="viewport-header">
        <div className="text-center">
          <img src={logo} alt="Lively Farm Logo" style={{ width: "10rem" }} />
        </div>

        {/* SLOGAN */}
        <h1 className="display-1 text-white font-peacock my-4 my-sm-5 px-2">
          Stay tuned for something{" "}
          <em className="font-peacock-loop underline-wavy">adorable</em>.
        </h1>

        <SignUpForm />
      </header>
    </>
  );
}

export default App;
