import { Link } from 'react-router-dom';
import './news.css'

function NewsCard(props) {
    const { newshead:
        { title, content, image, _id },
        } = props
    return (
        <div id="demo" class="carousel slide" data-bs-ride="carousel" >

  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='carousel-content'>
              <h2>{title}</h2>
              <p>{content}</p>
              </div>
      <img src={`http://localhost:3010/${image}`}  alt="Los Angeles" class="d-block w-100"/>
    </div>
    


  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
   </div>

    )
}

export default NewsCard