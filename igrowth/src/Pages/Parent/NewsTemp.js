import React, { useState ,useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './news.css';

function NewsTemp() {

    const [news, setNews] = useState([]);

    useEffect(() => {
      getNews();
    }, []);
  
    const getNews = async () => {
      const response = await axios.get("http://localhost:8081/news");
      setNews(response.data);
    };
  
    const deleteNews = async (productId) => {
      try {
        await axios.delete(`http://localhost:8081/news/${productId}`);
        getNews();
      } catch (error) {
        console.log(error);
      }
    };



 


  return (
    
<div className="container mt-5">
      <Link to="/admin/write" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {news.map((n) => (
          <div className="column is-one-quarter" key={n.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={n.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{n.name}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${n.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteNews(n.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsTemp;