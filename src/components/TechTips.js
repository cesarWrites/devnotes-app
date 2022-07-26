import React, {useEffect, useState} from "react";
import axios from 'axios';
import NewTechTip from "./NewTip";

function TechTips(){
    const[tips, setTips] = useState([])

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
                        <button>Like</button>
                        </div>
                ))}
                </div>
                <NewTechTip />
        </div>
    )
}

export default TechTips;