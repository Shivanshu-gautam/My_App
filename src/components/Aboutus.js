import React, { useState } from "react";

export default function Aboutus() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleMode = () => {
    if (myStyle.backgroundColor === "black") {
      setMyStyle({
        color: "blue",
        backgroundColor: "lightgray",
        border: '1px solid black',
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h1>About Us</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item’s accordion body.</strong> This
                is sample text for the first accordion item.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item’s accordion body.</strong> This
                is sample text for the second accordion item.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item’s accordion body.</strong> This
                is sample text for the third accordion item.
              </div>
            </div>
          </div>
        </div>

        <div className="container my-2">
          <button onClick={toggleMode} className="btn btn-primary">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}