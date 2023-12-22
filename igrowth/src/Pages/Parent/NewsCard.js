import { Link } from 'react-router-dom';
import './news.css';

function NewsCard(props) {
    const { news:
        { title, content, image, _id },
        } = props
    return (
        <div className="n-container" >
            <img className="img" src={`http://localhost:3010/${image}`} />
        <div class="right-side">
            <div class="paragraph-div-title">{title} </div>
            <div class="paragraph-div-content">{content} </div>
            <Link to="/Develop" className="nav-cake">
    <div className="readMore">Read More</div>
  </Link>
  
  <div className="date"></div>
        </div>
        </div>

    )
}

export default NewsCard