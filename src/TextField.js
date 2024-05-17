import React, { useState } from 'react'

export default function TextField(props) {
  //uppercase
  const handleUpClick=()=>{
    console.log("Upper Case was Clicked"+text)
   let newText=text.toUpperCase()
   setText(newText)
   props.showAlert("Connverted into upper case","Success")
  }
  //lowercase
  const handleDownClick=()=>{
    console.log("Lowercase was Clicked"+text)
   let newText=text.toLowerCase()
   setText(newText)
   props.showAlert("Connverted into lower case","Success")
  }
  //cleartext
  const clearTextarea=()=>{
    setText('')
    props.showAlert("Clear the text","Success")
  }
  const handleOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value)
  }
  const [text,setText]=useState('enter the text here')
  
  // setText(newText)
  return (
    <>
    <div className='container'>
    <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="10"></textarea>
    </div>
    <button  className="btn btn-secondary mx-5" onClick={handleUpClick}>To UpperCase</button>
    <button  className="btn btn-primary mx-5" onClick={handleDownClick}>To LowerCase</button>
    <button className="btn btn-danger" onClick={clearTextarea}>Clear</button>
</div>
<div className='container mx-4 py-5'>
   <div className='row'>
   <div className="col-4 mb-3" style={{ backgroundColor: 'lightblue' }}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Your Text Summary</h1></label>
        <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
    </div>
    <div className="col-4 mb-3 mx-5" style={{ backgroundColor: '#128AD4' }}>
       <h3>Preview</h3>
        <p>{text}</p>
    </div>
   </div>
</div>
    </>
  )
}

