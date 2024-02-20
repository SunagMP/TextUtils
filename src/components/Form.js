import React, { useState }  from 'react'

export default function Form(props) {
    const clickUpHandle = () => {
        let newText = text.toUpperCase();
        updatedText(newText);
    }

    const clicklowHandle = () => {
        let newText = text.toLowerCase();
        updatedText(newText);
    }

    const clickRevHandle = () => {
        let newText = '';
        for(let i=text.length-1 ; i>=0 ; i--){
            newText += text[i]; 
        }
        updatedText(newText);
    }

    const clickCleHandle = () =>{
        let newText = '';
        updatedText(newText);
    }

    const clickHandle = (event) => {
        updatedText(event.target.value);
    }

    const calcWords=(text) =>{
        let cnt = 0;
        let arr = text.split(" ");
        arr.forEach(element => {
            if (element != ''){
                cnt +=1;
            }
        }
        );
        return cnt;
    }

    const [text, updatedText] = useState("Enter the text for manipulation : ");
    return (

        <div className='formBox'>
        <div >
            <div className="mb-3" style={props.mode}>
            <textarea className="form-control" value={text} id="myBox" rows="7" onChange={clickHandle} style={props.mode}></textarea>
            </div>                
        </div>

        <div className="btn-group -mx" role="group" aria-label="Basic example" style={props.mode}>
            <button type="button" className="btn btn-secondary mx-3" value={text} onClick={clickUpHandle} >Convert To Upper</button>
            <button type="button" className="btn btn-secondary mx-3" value={text} onClick={clicklowHandle} >Convert To lower</button>
            <button type="button" className="btn btn-secondary mx-3" value={text} onClick={clickRevHandle} >Reverse Text</button>
            <button type="button" className="btn btn-secondary mx-3" value={text} onClick={clickCleHandle} >Clear Text</button>
        </div>

        <div className="container my-3" style={props.mode}>
            <h2>Overview</h2>
            <p> Your text contains {calcWords(text)} words and {text.length} of characters</p>
            <p>Time that may text to read is : {0.02 * text.split(" ").length} minutes</p>
            <h3>Text Preview</h3>
            <p>{text}</p>
        </div>
        </div>
    )
}
