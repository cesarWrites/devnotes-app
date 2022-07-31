import React, {useState} from "react";
import axios from 'axios';

function NewTechTipForm() {
    const [user, setUser] = useState("")
    const [content, setContent] = useState("")
  
    const handleSubmit =(e) => {
      e.preventDefault();
      e.reset();
    
    axios.post(' https://devnotes-backend-app.herokuapp.com/tips', {
    user:user,
    content:content,
  })
  .then((response) => {
    console.log(response)
  }, (error) => {
    console.log(error);
  })
    };
  
return (
    <form className="new-tip-form" onSubmit={handleSubmit}>
      <input placeholder="UserName" type="text" 
      value={user} 
      onChange={(e) => setUser(e.target.value)}/>
      <textarea placeholder="Write your tech tip here..." rows={10} type="text" value={content} 
      onChange={(e) => setContent(e.target.value)}/>
      <input type="submit" value="Share the tech tip" className="btn-inpt"/>
    </form>
  );
};

export default NewTechTipForm;