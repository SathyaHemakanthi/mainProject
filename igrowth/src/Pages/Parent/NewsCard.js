import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useEffect and useState
import './news.css';

function NewsCard() {
    const [news, setNews] = useState([]); // Use state to store news data

    useEffect(() => {
        fetch("http://localhost:8081/news")
            .then((res) => res.json())
            .then((data) => setNews(data)) // Set the fetched data to the state
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {news.map((item) => (
                <div key={item._id} className="n-container">
                    <img className="img" src={`http://localhost:3010/${item.image}`} alt={item.title} />
                    <div className="right-side">
                        <div className="paragraph-div-title">{item.title}</div>
                        <div className="paragraph-div-content">{item.content}</div>
                        <Link to="/Develop" className="nav-cake">
                            <div className="readMore">Read More</div>
                        </Link>
                        <div className="date">{/* Add date information here */}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsCard;
