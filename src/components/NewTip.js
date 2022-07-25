import React from "react";

function NewTechTipForm() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
  
    const handleSubmit =(e) => {
      e.preventDefault();
    
    axios.post('http://localhost:8004/poems', {
    title:title,
    content:content,
    author:author
  })
  .then((response) => {
    console.log(response)
  }, (error) => {
    console.log(error);
  })
    };
  
return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" type="text" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder="Author" type="text" 
      value={author} 
      onChange={(e) => setAuthor(e.target.value)}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} type="text" value={content} 
      onChange={(e) => setContent(e.target.value)}/>
      <input type="submit" value="Share your masterpiece"/>
    </form>
  );
};