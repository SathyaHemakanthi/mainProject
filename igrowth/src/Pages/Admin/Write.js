// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import './write.css';

// function Write() {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState("");
//   const [preview, setPreview] = useState("");
//   const navigate = useNavigate();

//   const loadImage = (e) => {
//     const image = e.target.files[0];
//     setFile(image);
//     setPreview(URL.createObjectURL(image));
//   };

//   const saveNews = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("title", title);
//     try {
//       await axios.post("http://localhost:3010/news/addnews", formData, {
//         headers: {
//           "Content-type": "multipart/form-data",
//         },
//       });
//       navigate("/parent/news");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="columns is-centered mt-5">
//       <div className="column is-half">
//         <form onSubmit={saveNews}>
//           <div className="field">
//             <label className="label">Product Name</label>
//             <div className="control">
//               <input
//                 type="text"
//                 className="input"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Product Name"
//               />
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Image</label>
//             <div className="control">
//               <div className="file">
//                 <label className="file-label">
//                   <input
//                     type="file"
//                     className="file-input"
//                     onChange={loadImage}
//                   />
//                   <span className="file-cta">
//                     <span className="file-label">Choose a file...</span>
//                   </span>
//                 </label>
//               </div>
//             </div>
//           </div>

//           {preview ? (
//             <figure className="image is-128x128">
//               <img src={preview} alt="Preview Image" />
//             </figure>
//           ) : (
//             ""
//           )}

//           <div className="field">
//             <div className="control">
//               <button type="submit" className="button is-success">
//                 Save
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
  

// export default Write;



import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3010")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="App">
      <h1>Image uploading react</h1>
      {data.map((singleData) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      })}
    </div>
  );
}

export default App;