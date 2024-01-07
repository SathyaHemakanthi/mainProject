import React, { useState ,useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './news.css';


import img1 from './images/corona.jpg'
import img2 from './images/nipha.jpeg'
import img3 from './images/dengue.png'
import img4 from './images/helth01.jpg'
import img5 from './images/helth02.jpg'
import img6 from './images/helth04.jpg'



function News() {
  const [news, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/news")
      .then((res) => res.json())
      .then((news) => setData(news))
      .catch((err) => console.log(err));
  }, []);




  return (
    
   <div>
     
    <div id="demo" class="carousel slide" data-bs-ride="carousel" >

  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='carousel-content'>
              <h2>Image 1</h2>
              <p>Details for Image 1.</p>
              </div>
      <img src={img1} alt="Los Angeles" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={img2 }alt="Chicago" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={img3}alt="New York" class="d-block w-100"/>
    </div>
  


  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
   </div>

   {news.map((n,i)=>(  

   <div className="n-container" key={i}>

      <img src={n.url} className="img" alt=""  />
      <div class="right-side">
       
        <div class="paragraph-div-title">
        {n.title}
        </div>
        <div class="paragraph-div-content">
          
        {n.content}
            
          
        </div>

        <Link to="/Develop" className="nav-cake">
          <div className="readMore">Read More</div>
        </Link>
      </div>
      <div className="date">{n.date}</div>

    </div>
      ))}
    
    <div className="footer">
        © 2023 Monitor Baby Growth & Suggest Advice
      </div>
      
      
      </div> 
  )
}

export default News;