import React, {useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLoChange = () => {
        setText(text.toLowerCase())
    }
    const handleClearText = () => {
        setText('')
    }
    const handleCopyText = () => {
        var textFiled  =   document.getElementById('field');
        textFiled.select();
        navigator.clipboard.writeText(textFiled.value);
    }
    const handleRemoveExtraSpace = () => {
         var newText =    text.split(/[ ]+/);
         setText(newText.join(" ")) ;
    }
  return (
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea  className="form-control" value = {text} id = 'field' onChange={handleOnChange} rows="8"></textarea>

            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Covert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoChange}>Covert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
            <div className="continer">
                <h3>Your Text Summary</h3>
                <p>{text.length} Characters, {text.split(' ').length} Words</p>
            </div>
        </div>
  )
}
 