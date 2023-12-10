import { Link } from 'react-router-dom';
import './news.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function NewsCard(props) {
  const {
    newshead: { title, content, image, _id },
  } = props;

  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-content">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
          <img src={`http://localhost:3010/${image}`} alt="Los Angeles" className="d-block w-100" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default NewsCard;
