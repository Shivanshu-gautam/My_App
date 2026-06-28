import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] =useState("Enter the text here.");
    const handleOnchange = (event) => {
        console.log("On change"+ text);
        setText(event.target.value);
         
    }
    const handleOnclick = () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converte to uppercase","success");
    }
    const handleOnclick2 = () => {
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converte to lowercase","success");
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
             
            <div className="mb-3">
                 
                <textarea className={`form-control ${props.mode === "dark" ? "bg-dark text-light border-secondary" : "bg-light text-dark"}`} value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
            </div>
             
            <button className={`btn ${props.mode === "dark" ? "btn-info" : "btn-primary"}`} onClick={handleOnclick}> Convert to uppercase</button>
            <button className={`btn ${props.mode === "dark" ? "btn-info" : "btn-primary"} mx-3`} onClick={handleOnclick2}>Convert to lowercase</button>
             
        </div>
        <div className={`container my-3 ${props.mode === "dark" ? "text-light" : "text-dark"}`}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>

        </>
    )
}