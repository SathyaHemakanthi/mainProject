import {ReactDOM} from "react";
import { createBrowserRouter , RouterProvider, Route, Outlet} from "react-router-dom";
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
import Login from "./Pages/Admin/Login.js";




const Layout1 = ()=>{
  return(
    <div>
      <Header/>
      <Navbar/>
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
        path:"/admin/login" ,
        element:<Login />,
      },
      {
        path:"/admin/upload" ,
        element:<Upload />,
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
