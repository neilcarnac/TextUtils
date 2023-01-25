
import React, { useState } from 'react'
import PropTypes from 'prop-types'; 

const TextForm =  (props) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Has Been Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Has Been Converted to Lower Case", "success");

    }
    const handleLowClear = () => {
        let newText = '';
        setText(newText);

    }
    
    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);

    }
    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        newText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Has Been Copied to Clipboard" , "success");

    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    const [tStyle, setTStyle] = useState({
    
        backgroundColor: 'black',
        color: '#1eaf00'
    })
    return (
        <>
            <div className='container my-4' style={{color: props.mode=== 'dark'?'white':'rgb(32 40 67)' }}>
                <h1 id='tittle'>{props.heading}</h1>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    {/* style = {tStyle} */}
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode=== 'dark'?'rgb(32 40 67)':'white',color: props.mode=== 'dark'?'white':'rgb(32 40 67)' }} onChange={handleOnChange} id="myBox" rows="7"></textarea>
                </div>
                <button className='btn btn-danger my-3 mx-2' onClick={handleUpClick}>Convert To Upper Case</button>
                <button className='btn btn-danger my-3 mx-2' onClick={handleLowClick}>Convert To Lower Case</button>
                <button className='btn btn-danger my-3 mx-2' onClick={handleLowClear}>Clear</button>
                <button className='btn btn-danger my-3 mx-2' onClick={handleSpeak}>Speak</button>
                <button className='btn mx-2' id='Copy' onClick={handleCopy}>Copy</button>
            </div>
            <div id='summary' className="container mx-0 my-2" style={{color: props.mode=== 'dark'?'white':'rgb(32 40 67)'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=> {return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p style={{color: props.mode=== 'dark'?'#ffffffa1 ':'rgb(32 40 67 / 58%)'}}>{text.length>0?text:"Enter Text To Be Previewed"}</p>
            </div>
        </>
    )
}

export default TextForm;