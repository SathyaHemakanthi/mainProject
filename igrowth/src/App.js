import {ReactDOM} from "react";
import { createBrowserRouter , RouterProvider, Route, Outlet} from "react-router-dom";
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
import Logout from "./Pages/Parent/Logout";
import Profile from "./Pages/Parent/Profile";

import Measure from "./Pages/Midwife/Measure";
import Baby_Detail from "./Pages/Midwife/Baby_Detail";
import Vacc_Detail from "./Pages/Midwife/Vacc_Detail";
import Consult_Advices from "./Pages/Midwife/Consult_Advices";
import View_Development from "./Pages/Midwife/View_Development";
import Create_Account from "./Pages/Midwife/Create_Account";
import Vaccination1 from "./Pages/Midwife/Vaccination1";
import Upload from "./Pages/Admin/Upload.js";
import Signup from "./Pages/Admin/Signup.js";
import Write from "./Pages/Admin/Write.js";

const Layout1 = ()=>{
  return(
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>

      
      
      {/* <SearchResults /> */}
     
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
    path:"/parent",
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
      },{
        path:"/parent/logout",
         element:<Logout />,
      },{
        path:"/parent/profile",
         element:<Profile />,
      },
    ]
  },

  {
    path:"/midwife",
    element:<Layout2/>,
    children:[
      {
        path:"/midwife/measure" ,
        element:<Measure />,
      },
      {
        path:"/midwife/baby_detail",
        element:<Baby_Detail />,
      },
      {
        path:"/midwife/vacc_detail",
         element:<Vacc_Detail />,
      },
      {
        path:"/midwife/consult_advices" ,
        element:<Consult_Advices />,
      },
      {
        path:"/midwife/view_development",
        element:<View_Development />,

      },
      {
        path:"/midwife/create_account",
        element:<Create_Account />,

      },
      {
        path:"/midwife/vaccination1",
        element:<Vaccination1 />,
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

