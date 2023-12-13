import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import './AddNews.css'

function Addnews() {
    const navigate = useNavigate()
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [content, setContent] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        formData.append('content', content)

        axios.post(`http://localhost:3010/newshead/add-news-head`, formData)
            .then((res) => {
                console.log(res, "res")
                if (res.data.code == 200) {
                    navigate('/admin/viewnewshead')
                }
            })
            .catch((err) => {
                console.log(err, "err")
            })

    }

    return (
        <>
            <h1 className="center"> ADD HEADING NEWS </h1>
            <form className="form-card" onSubmit={handleSubmit}>
                <p> TITLE   </p>
                <input required className="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <p> CONTENT  </p>
                <input required className="content" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                <p> IMAGE  </p>
                <input required className="image" type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button type="submit" className="submit"> SUBMIT </button>
            </form>
        </>
    )
}

export default Addnews