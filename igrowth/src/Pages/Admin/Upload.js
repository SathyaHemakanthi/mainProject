import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function Upload() {
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    title: '',
    content: '',
  });

  const navigate = useNavigate();

  const handleChange = (content) => {
    setValues({ ...values, content });
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("image", file);
    formData.append("title", values.title);
    formData.append("content", values.content);

    axios.post("http://localhost:8081/igrowth/news", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        alert("Upload success");
        navigate('/parent/news');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='pwrite'>
      <form onSubmit={handleSubmit}>
        <input
          className="tint"
          type='text'
          placeholder='Title'
          name='title'
          id='title'
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <div className="editorContainer">
          <ReactQuill
            theme='snow'
            value={values.content}
            onChange={handleChange}
          />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
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
