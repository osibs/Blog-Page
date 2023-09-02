import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./blogdetails";
import Page404 from "./404";


const router = createBrowserRouter([

  // {
  //   path: "/",
  //   element: <div> <Home/> </div>,
  //   errorElement: <div> Page not Found </div>

  // },

  // {
  //   path: "/create",
  //   element: <div> <Create/> </div>,
  //   errorElement: <div> Page not Found </div>

  // },

  // {
  //   path: "/blogs/:id",
  //   element: <div> <BlogDetails/> </div>,
  //   errorElement: <div> Page not Found </div>

  // },

  // {
  //   path: "*",
  //   element: <div> <Page404/> </div>,

  // },

  {
    path: "/",
    element: <Navbar />,
    errorElement: <div> Page not Found </div>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
    path: "/create",
    element: <div> <Create/> </div>,
    errorElement: <div> Page not Found </div>

  },

  {
    path: "/blogs/:id",
    element: <div> <BlogDetails/> </div>,
    errorElement: <div> Page not Found </div>

  },

  {
    path: "*",
    element: <div> <Page404/> </div>,
  }

    ]

  }


])


function App() {
  return (
     <div className="App"> 
      {/* <Navbar /> */}

      <div className="content"> 
       <RouterProvider router = {router} />
     </div>
     </div>
  );
}

export default App;
