import { useEffect, useState } from "react"
import axios from "axios"

import './News.css'
import NewsHead from "./NewsHeadCard"
import { useNavigate } from "react-router-dom"

function Users() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [filter,setFilter] = useState('')
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3010/newshead/get-news-head`)
            .then((res) => {
                console.log(res, "9")
                setData(res.data.data)
            })
            .catch(err => {
                console.log("ERR", err)
            })
    }, [deleted])

    const handleLink = () => {
        navigate('/admin/add-news')
    }
    const handleLink2 = () => {
        navigate('/admin/add-news-head')
    }
    const handleLink3 = () => {
        navigate('/admin/viewnews')
    }


    const handleDelete = (_id) => {
        console.log(_id, "28")
        axios.delete(`http://localhost:3010/newshead/delete-news-head/${_id}`)
            .then((res) => {
                console.log(res.data, "31")
                if (res.data.code == 200) {
                    setDeleted(!deleted)
                }
            })
    }
    const handleEdit = (_id) => {
        navigate(`/admin/edit-news/${_id}`)
    }

    return (
        <>
            <div className="header">
                <div>
                    <h1> Heading LIST </h1>
                </div>
                <div>
                    <input 
                    type="text"
                    value={filter} 
                    placeholder="Search News ..."
                    className="filter-input"
                    onChange={(e)=> setFilter(e.target.value)}/>
                    <button
                        onClick={handleLink}
                        className="add-btn">
                        ADD NEWS
                    </button>
                    <button
                        onClick={handleLink2}
                        className="add-btn">
                        ADD NEWS MAIN HEADING
                    </button>
                    <button
                        onClick={handleLink3}
                        className="add-btn">
                        VIEW NEWS
                    </button>
                </div>
            </div>
            <div className="news-container">
                {
                    data &&
                    data.length > 0 &&
                    data.filter(i => i.title && i.title.toString().includes(filter))
                    .map((news) => {
                        return (
                            <NewsHead key={news._id}
                                newshead={news}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users
