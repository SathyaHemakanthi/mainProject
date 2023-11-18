import React from "react"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// import { ScheduleComponent } from "@syncfusion/ej2-react-schedule";      
import Navbar from './component/Navbar';
import Header from './component/Header';
import News from './Pages/Parent/News';
import Growth from "./Pages/Parent/Growth";
import Develop from "./Pages/Parent/Develop";
import Vaccination from"./Pages/Parent/Vaccination";
import Health from"./Pages/Parent/Health";
import Consultation from"./Pages/Parent/Consultation";
import Calendar1 from "./Pages/Parent/Vaccination";
// import Calender from "./Pages/Parent/Vaccination";
import Logout from "./Pages/Parent/Logout"; 
// import Form from "./Pages/Midwife/Form";

import {ReactDOM} from "react";
import { createBrowserRouter , RouterProvider,Routes, Route, Outlet} from "react-router-dom";
import { ScheduleComponent } from "@syncfusion/ej2-react-schedule";
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";
import Header from "./component/Header";
import News from "./Pages/Parent/News";
import Growth from "./Pages/Parent/Growth";
import Develop from "./Pages/Parent/Develop";
import Vaccination from "./Pages/Parent/Vaccination";
import Health from "./Pages/Parent/Health";
import Consultation from "./Pages/Parent/Consultation";
import Calendar from "./Pages/Parent/Vaccination";
import Upload from "./Pages/Admin/Upload.js";
import Signup from "./Pages/Admin/Signup.js";

import Write from "./Pages/Admin/Write.js";




const Layout1 = ()=>{
  return(
    <div>
      <Header/>
      <Navbar/>
      
   <Routes>
      
      <Route exat path ='/news' element ={<News/>}/>
      <Route exat path ='/growth' element ={<Growth/>}/>
      <Route exat path ='/develop' element ={<Develop/>}/>
      <Route exat path ='/vaccination' element ={<Vaccination/>}/>
      <Route exat path ='/health' element ={<Health/>}/>
      <Route exat path ='/consultation' element ={<Consultation/>}/>
      <Route exat path ='/calender' element ={<Calendar1/>}/>
      <Route exat path="/logout" element={<Logout/>}/>
      {/* <Route exat path="/form" element={<Form/>}/> */}
    </Routes>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
};

const Layout2 = ()=>{
  return(
    <div>
      <Header/>
      <Navbar2/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout1/>,
    children:[
      {
        path:"/parent/news" ,
        element:<News />,
      },
      
      {
        
        path:"/parent/growth",
        element:<Growth />,

      },
      {
        path:"/parent/develop",
         element:<Develop />,
      },
      {
        path:"/parent/vaccination",
         element:<Vaccination />,
      },
      {
        path:"/parent/health",
         element:<Health />,
      },
      {
        path:"/parent/consultation",
         element:<Consultation />,
      },{
        path:"/parent/calender",
         element:<Calendar />,
      },

    ]

  },

  {
    path:"/midwife",
    element:<Layout2/>,
    children:[
      {
        path:"/midwife/news" ,
        element:<News />,
      },
      {
        path:"/midwife/growth",
        element:<Growth />,

      },

    ]

  },

  {
    path:"/admin",
    element:<Layout2/>,
    children:[
      {
        path:"/admin/signup" ,
        element:<Signup />,
      },
      {
        path:"/admin/upload" ,
        element:<Upload />,
      },

      {
        path:"/admin/write" ,
        element:<Write/>,
      },

    ]

  },

]);

function App(){
  return(
    <div>
      
        <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
