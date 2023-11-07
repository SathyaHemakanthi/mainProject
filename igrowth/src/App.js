import {ReactDOM} from "react";
import { createBrowserRouter , RouterProvider, Route, Outlet} from "react-router-dom";

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


function App(){
  return(
    <div>
      
        <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
