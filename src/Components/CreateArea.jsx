import React from "react";
import { useState } from "react";

function CreateArea(props) {

  let [entry,setEntry] = useState({
     title:"",
     content:""
  })

  function handleChange(event){
     setEntry(prevObj => {
          let {name,value} = event.target;   
          return(
            {...prevObj,[name]:value}   
          )
     })
  }

  function handleClick(event){
    props.onAdd(entry);
    setEntry({title:"",content:""});
    event.preventDefault();

  }

  return (
    <div>
      <form>
        <input onChange = {handleChange} value={entry.title} name="title" placeholder="Title" />
        <textarea  onChange = {handleChange} value = {entry.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
