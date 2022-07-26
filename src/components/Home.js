import React from "react";

function Home() {
  const imgurl = "https://media.istockphoto.com/photos/young-woman-texting-on-smart-phone-picture-id527270693?b=1&k=20&m=527270693&s=170667a&w=0&h=6iBSeYlTixFLSF-zlmERg7D06sDimfyUScO4tyBaMeQ=";
  return (
  <div className="home-div">
    <article>
      <p>Get all the tech resources and tips to make your programming journey and understanding of etchnology a little more easier.</p>
      <p>Share your most amazing tips with the other tech enthusiasts </p>
      <img src={imgurl}/>
  </article>
  </div>
  )
}

export default Home;
