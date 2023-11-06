import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

function Upload() {
  const [values, setValues] = useState({
    title: '',
    content: '',
  });

  const navigate = useNavigate(); // Declare navigate

  const handleChange = (content) => {
    setValues({ ...values, content });
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.title || !values.content) {
      alert("Enter data for all fields");
    } else {
      axios.post("http://localhost:8081/igrowth/news", values)
        .then((res) => {
          alert("Upload success");
          navigate('/parent/news'); // Use navigate to go to another route
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
