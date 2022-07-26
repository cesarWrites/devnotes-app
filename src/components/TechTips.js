import React, {useEffect, useState} from "react";
import axios from 'axios';
import NewTechTip from "./NewTip";

function TechTips(){
    const[tips, setTips] = useState([])
    let [show, setForm] = useState(false);
    let[count, setCount] = useState(0)
    const srcUrl = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/thumbs-up_1f44d.png"
  function handleClick(){
    setForm(true);
  }
    useEffect(()=>{
        getTipDetails();
    }, [])
    const getTipDetails =() =>{
        axios
        .get('http://localhost:3000/tips')
        .then((res)=>{
            console.log(res);
            setTips(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };


    return(
        <div className="tech-tips">
            <div className="tips-container">
            {tips.map((tip) => (
                    <div className="tips-det" key = {tip.id}>
                        <p>{tip.content}</p>
                        <h3>{tip.user}</h3>
                        <h4>Upvotes: {tip.upvotes}</h4>
                       <button><img src={srcUrl}></img></button>
                        </div>
                ))}
                </div>
                <div className="new-tip-div">
                <button onClick={handleClick}>Create new tip</button>
        {show ? <NewTechTip /> : null}
                </div>
        </div>
    )
}

export default TechTips;