import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './write.css'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'

const Upload = () =>{
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const [file, setFile] = useState();
  console.log(content)
  console.log(title)
  console.log(file)
  const handleClick = async (e) => {
    e.preventDefault();


  };

  return (
    <div>
        <form>
    <div className='pwrite'>
      <div className="pcontent"></div>
      <input className="tint" type='text' name='title' placeholder='Title' onChange={setTitle} />
      <div className="pmenu">
      <div className="editorContainer">
        <ReactQuill name='content' id='content' theme='snow' content={content} onChange={setContent}/>
      </div>
        <div className="item">
          <input  type="file" name="" id="file"/>
          <label htmlFor='file' name="file" onChange={(e) =>setFile(e.tartget.files[0])}>Upload Image</label>
          <div className="buttons">
            {/* <input type='submit' value='Upload'/> */}
            <button onClick={handleClick}>Upload</button>
          </div>
        </div>
        
      </div>
    </div>
    </form>
    </div>
  )
}

export default Upload
