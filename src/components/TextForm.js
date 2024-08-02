import React,{useState} from 'react';


export default function TextForm(props) {
    const [text,setText] =useState('');

    const handleUpper =()=>{
        // console.log("Uppercase is clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success")

    }
    const handleLower =()=>{
        // console.log("Uppercase is clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase","success")

    }
    const handleChange =(event)=>{
        // console.log("on change");
        setText(event.target.value)  
        
    }
  const clearText=()=>{
    setText("")
  }
    const remduplicates = ()=>{
    const charArray = text.split(''); 
    const uniqueChars = [...new Set(charArray)]; // Create Set and spread back to array
    const result = uniqueChars.join(''); // Join array back to string
      setText(result)
      props.showAlert("Removed Duplicates","success")

    }

  return (
    <>
    <div className='container' style={{color:props.mode ==='light'?'black':'white'}}>
    <h1>{props.headin}</h1>
<div className="mb-3" >
  
  <label htmlFor="myBox" className="form-label"> </label>
  <textarea className="form-control"  id="myBox" value={text} onChange={handleChange} rows="6"style={{backgroundColor:props.mode ==='light'?'#25233e':'white',color:props.mode ==='light'?'white':'black'}} ></textarea>
</div>
<div className='container mx-auto' >
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpper}> convert to upperCase </button>

<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLower}> convert to LowerCase </button>

<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={remduplicates}> Remove duplicates</button>

<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={clearText}> clear Text </button>
</div>

<div className='container my-2' style={{color:props.mode ==='light'?'black':'white'}}>
    <h1>Text Summary</h1>
    <p> There are {text.trim().split(/\s+/).length} words and {text.length} characters</p>
    
    <h3> Preview </h3>
    <p>{text}</p>

</div>
</div>
    </>
  )
}
 