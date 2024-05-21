import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";



function App() {

let [arrNot,setArrNot] = useState([]);

function addNote(note){
  setArrNot(prevArr =>
  {  return [...prevArr,note]; });
  
}
function deleteNote(id){
  setArrNot(y => {
      return  y.filter((ele,index)=>{
        return index!==id;
     });
  });
}
  return (
    <div>
      <Heading />
      <CreateArea 
        onAdd={addNote}
      />
      {
        arrNot.map((x,index) => {
         return (<Note
           onDel={deleteNote}
           key = {index}
           id = {index}
           title={x.title}
           content={x.content}
          />);
        })
      }
      <Footer />
    </div>
  );
}

export default App;