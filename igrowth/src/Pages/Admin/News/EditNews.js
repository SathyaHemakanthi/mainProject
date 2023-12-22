import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import './AddNews.css'

function EditNews() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [content, setContent] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3010/news/get-news/${id}`)
            .then(res => {
                console.log(res, "17")
                if (res.data.code == 200) {
                    setTitle(res.data.data.title)
                    setContent(res.data.data.content)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        formData.append('content', content)

        axios.put(`http://localhost:3010/news/edit-news/${id}`, formData)
            .then((res) => {
                console.log(res, "res")
                if (res.data.code == 200) {
                    navigate('/admin/viewnews')
                }
            })
            .catch((err) => {
                console.log(err, "err")
            })

    }

    return (
        <>
        <h1 className="center"> ADD NEWS </h1>
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

export default EditNews