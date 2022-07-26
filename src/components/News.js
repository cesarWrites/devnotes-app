import React, {useState, useEffect} from "react";
import axios from 'axios';


function News(){
    const[news, setNews] = useState([])
useEffect(()=>{
    getNews();
}, [])
const getNews =() =>{
    axios
    .get('https://devnotes-backend-app.herokuapp.com/news')
    .then((res)=>{
        console.log(res);
        setNews(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
};
    return(
            <div className="tech-news">
            <div className="news-container">
            {news.map((newsItem) => (
                    <div className="news-det" key = {newsItem.id}>
                        <h2>{newsItem.header}</h2>
                        <p>{newsItem.excerpt}</p>
                        <a href={newsItem.url}>Read more</a>
                        </div>
                ))}
                </div>
        </div>
       
    )
}

export default News;