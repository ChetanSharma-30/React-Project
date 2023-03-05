 import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success')
  };

  const handleLoClick = () => {
    // console.log("handleLoClick was clicked");

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!', 'success')

  };

  const handleClearClick = () => {
    // console.log("handleLoClick was clicked");

    let newText = '';
    setText(newText);
    props.showAlert('Text is Clear', 'success')

  };



  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

 const  handleCopy = () =>{
  var text = document.getElementById('myBox')
  text.select();
  // text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value); 
  props.showAlert('Text is Copied', 'success')

}


const handleExtraSpace = () =>{
  let newText = text.split(/[   ]+/);
  setText(newText.join(' '))
}


  const [text, setText] = useState("Enter Text Here");
  // setText('This is how we change text here')
  // setText("Type here");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
          Clear Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
