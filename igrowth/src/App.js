// import React from "react"
// import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// // import { ScheduleComponent } from "@syncfusion/ej2-react-schedule";      
// import Navbar from './component/Navbar';
// import Header from './component/Header';
// import News from './Pages/Parent/News';
// import Growth from "./Pages/Parent/Growth";
// import Develop from "./Pages/Parent/Develop";
// import Vaccination from"./Pages/Parent/Vaccination";
// import Health from"./Pages/Parent/Health";
// import Consultation from"./Pages/Parent/Consultation";
// // import Calendar1 from "./Pages/Parent/Vaccination";
// // import Calender from "./Pages/Parent/Vaccination";
// import Logout from "./Pages/Parent/Logout"; 
// // import Form from "./Pages/Midwife/Form";

// // import {ReactDOM} from "react";
// import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
// import { ScheduleComponent } from "@syncfusion/ej2-react-schedule";
// import Navbar2 from "./component/Navbar2";
// import Calendar from "./Pages/Parent/Vaccination";
// import Upload from "./Pages/Admin/Upload.js";
// import Signup from "./Pages/Admin/Signup.js";

// import Write from "./Pages/Admin/Write.js";




// const Layout1 = ()=>{
//   return(
//     <div>
//       <Header/>
//       <Navbar/>
      
//    <Routes>
      
//       <Route exact path ='/news' element ={<News/>}/>
//       <Route exact path ='/growth' element ={<Growth/>}/>
//       <Route exact path ='/develop' element ={<Develop/>}/>
//       <Route exact path ='/vaccination' element ={<Vaccination/>}/>
//       <Route exact path ='/health' element ={<Health/>}/>
//       <Route exact path ='/consultation' element ={<Consultation/>}/>
//       <Route exact path ='/calender' element ={<Calendar/>}/>
//       <Route exact path="/logout" element={<Logout/>}/>
//       {/* <Route exat path="/form" element={<Form/>}/> */}
//     </Routes>
//       <Outlet/>
//       {/* <Footer/> */}
//     </div>
//   );
// };

// const Layout2 = ()=>{
//   return(
//     <div>
//       <Header/>
//       <Navbar2/>
//       <Outlet/>
//       {/* <Footer/> */}
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path:"/parent",
//     element:<Layout1/>,
//     children:[
//       {
//         path:"/parent/news" ,
//         element:<News />,
//       },
      
//       {
        
//         path:"/parent/growth",
//         element:<Growth />,

//       },
//       {
//         path:"/parent/develop",
//          element:<Develop />,
//       },
//       {
//         path:"/parent/vaccination",
//          element:<Vaccination />,
//       },
//       {
//         path:"/parent/health",
//          element:<Health />,
//       },
//       {
//         path:"/parent/consultation",
//          element:<Consultation />,
//       },{
//         path:"/parent/calender",
//          element:<Calendar />,
//       },

//     ]

//   },

//   {
//     path:"/midwife",
//     element:<Layout2/>,
//     children:[
//       {
//         path:"/midwife/measure" ,
//         element:<Measure />,
//       },
//       {
//         path:"/midwife/baby_detail",
//         element:<Baby_Detail />,

//       },
//       {
//         path:"/midwife/vacc_detail",
//          element:<Vacc_Detail />,
//       },
//       {
//         path:"/midwife/consult_advices" ,
//         element:<Consult_Advices />,
//       },
//       {
//         path:"/midwife/marke_activity",
//         element:<Marke_Activity />,

//       },
//       {
//         path:"/midwife/create_account",
//         element:<Create_Account />,

//       },

//     ]

//   },

//   {
//     path:"/admin",
//     element:<Layout2/>,
//     children:[
//       {
//         path:"/admin/signup" ,
//         element:<Signup />,
//       },
//       {
//         path:"/admin/upload" ,
//         element:<Upload />,
//       },

//       {
//         path:"/admin/write" ,
//         element:<Write/>,
//       },

//     ]

//   },

// ]);

// function App(){
//   return(
//     <div>
      
//         <RouterProvider router={router} />
      
//     </div>
//   );
// }

// export default App;




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
import Measure from "./Pages/Midwife/Measure";
import Baby_Detail from "./Pages/Midwife/Baby_Detail";
import Vacc_Detail from "./Pages/Midwife/Vacc_Detail";
import Consult_Advices from "./Pages/Midwife/Consult_Advices";
import Marke_Activity from "./Pages/Midwife/Marke_Activity";
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
        path:"/midwife/marke_activity",
        element:<Marke_Activity />,

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
// function App() {
//   return (
//     <div>
//       <Router>
//         <Header />
//         <Navbar />

//         <Routes>
//           <Route exat path="/news" element={<News />} />
//           <Route exat path="/growth" element={<Growth />} />
//           <Route exat path="/develop" element={<Develop />} />
//           <Route exat path="/vaccination" element={<Vaccination />} />
//           <Route exat path="/health" element={<Health />} />
//           <Route exat path="/consultation" element={<Consultation />} />
//           <Route exat path="/calender" element={<Calendar />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }



function App(){
  return(
    <div>
      
      
       
        <RouterProvider router={router} />
      
  
        
      
    </div>
  );
}

export default App;

