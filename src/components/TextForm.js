import React, {useState} from 'react'

export default function TextForm(props) {

    const toUppercase = () =>{
        setText(text.toUpperCase());
        props.showAlert('Text is Coverted to Uppercase','success' )
    }

    const toLowercase = () =>{
        setText(text.toLowerCase());
        props.showAlert('Text is Coverted to Lowercase','success' )
    }

    const toCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied','success' )
    }

    const toClearAll = () =>{    
        setText("");
        props.showAlert('Cleared All Text','success' )
    }

    const toRemoveExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed','success' )
    }



    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('')


    return (
        <>
            <div className="mb-3" style={{color:props.mode === 'light'?'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white' : '#343232',color:props.mode === 'light'?'black' : 'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={toUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={toLowercase}>Convert to lowercasecase</button>
            <button className="btn btn-primary mx-2" onClick={toCopy}>CopyText</button>
            <button className="btn btn-primary mx-2" onClick={toClearAll}>Clear All</button>
            <button className="btn btn-primary mx-2" onClick={toRemoveExtraSpaces}>Remove Extra Spaces</button>

            <div className="container my-3" style={{color:props.mode === 'light'?'black' : 'white'}}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters </p>
                <p>{text.split(" ").length*0.008} minutes to count words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Text to Preview'}</p>
            </div>
        </>
    )
}
