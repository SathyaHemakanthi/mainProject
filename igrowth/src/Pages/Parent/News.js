import React, { useState ,useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './news.css';
import Newsg from './NewsCard'
import Newsh from './NewsHeadCard'

import img1 from './images/corona.jpg'
import img2 from './images/nipha.jpeg'
import img3 from './images/dengue.png'

function News() {
  const [data, setData] = useState([])
  const [head, setHead] = useState([])
 
  useEffect(() => {
    axios.get(`http://localhost:3010/news/get-news`)
        .then((res) => {
            console.log(res, "9")
            setData(res.data.data)
        })
        .catch(err => {
            console.log("ERR", err)
        })
}, )
useEffect(() => {
    axios.get(`http://localhost:3010/newshead/get-news-head`)
        .then((res) => {
            console.log(res, "9")
            setHead(res.data.data)
        })
        .catch(err => {
            console.log("ERR", err)
        })
}, )


  


  return (
    
   <div>
     
    <div id="demo" class="carousel slide" data-bs-ride="carousel" >

  
    {
    head.map((h) => {
    return (
    <Newsh key={h._id}
    newshead={h}/>
    )
    })
    }
   </div>

  

   <div className="" >
   {
    data.map((n) => {
    return (
    <Newsg key={n._id}
    news={n}/>
    )
    })
    }
    </div>
     
    
    <div className="footer">
        © 2023 Monitor Baby Growth & Suggest Advice
      </div>
      
      
      </div> 
  )
}

export default News;