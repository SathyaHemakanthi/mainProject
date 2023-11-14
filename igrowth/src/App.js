

function App() {
  return (
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
