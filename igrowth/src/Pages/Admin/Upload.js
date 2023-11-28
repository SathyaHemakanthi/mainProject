import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './write.css';

function Upload() {
  const [values, setValues] = useState({
    title: '',
    content: '',
    
  });

  const [fimage, setImage] = useState({
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (content) => {
    setValues({ ...values, content });
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.title || !values.content || !fimage) {
      alert("Enter data for all fields");
    } else {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("image", fimage);

      axios.post("http://localhost:8081/news", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          alert("Upload success");
          navigate('/parent/news');
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className='pwrite'>
      <form onSubmit={handleSubmit}>
        <input className="tint" type='text' placeholder='Title' name='title' id='title' onChange={(e) => setValues({ ...values, title: e.target.value })} />
        <div className="editorContainer">
          <ReactQuill theme='snow' value={values.content} onChange={handleChange} />
        </div>
        <input type="file" name="image"  onChange={handleImageChange} accept="image/*" />
        <div className="item">
          <div className="buttons">
            <input type="submit" value="Upload" name="submit-btn" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Upload;
