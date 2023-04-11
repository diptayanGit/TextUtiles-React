import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    let words = text.split(" ").filter((element)=>{return element.length!==0}).length;
    let characters = text.length;

    const handleUpClick = ()=>{
        // console.log("UpperCase is clicked" + text);
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to UpperCase", 'success');
    }

    const handleLowClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to LowerCase", 'success');
    }

    const handleOnChange = (event)=>{
        // console.log("OnChange is clicked");
        setText(event.target.value);
    }

    const handleResetClick = ()=>{
        setText('');
        props.showAlert("Text has been removed", 'success');
    }


    const handleCopy = () =>{
        let copy = document.getElementById('exampleFormControlTextarea1');
        copy.select();
        navigator.clipboard.writeText(copy.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", 'success');
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed", 'success');
    }

    // object to change style in the page
    let pageStyle ={
        backgroundColor: props.mode==='dark'?'#424649':'white',
        color: props.mode==='dark'?'white':'black'
    }
  return (
    <>
    <div className="container">
        <h5>{props.heading}</h5>
        <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={pageStyle}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert text to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert text to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleResetClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h5>Text summary</h5>
        <p className="info">{words} words and {characters} characters</p>
        <p className="time">{0.008 * words} minutes to read</p>
        <h5>Preview</h5>
        <p>{text.length>0?text:'Enter text to preview'}</p>
    </div>
    </>
  )
}
