import './News.css';

function NewsCard(props) {
    const { news: { title, content, image, _id }, handleEdit, handleDelete } = props;

    return (
        <div className="news-card">
            {/* Assuming 'image' contains the relative path, adjust accordingly */}
            <img width="100%" src={`http://localhost:8010/${image}`} alt={title} />

            <p className="news-title">{title}</p>
            <p className="news-content">{content}</p>
            <div className='btn-card'>
                <button className='edit-btn' onClick={() => handleEdit(_id)}> EDIT </button>
                <button className='del-btn' onClick={() => handleDelete(_id)}>  DELETE </button>
            </div>
        </div>
    );
}

export default NewsCard;
