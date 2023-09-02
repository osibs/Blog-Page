import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return ( 
       <div>
         <nav className="navbar">
            <h1 style={{
                color:"brown"
            }}> OsibsBlogs </h1>
            <div className="links">

                <Link to="/" style={{
                    color:"black"
                }}> Home </Link>  
                {/* we use the 'link' instead of href so the browser will not need to send a request to the server for a new page, react intercepts and send that new page  */}

                <Link to ="/create" style={{
                    color:"white",
                    backgroundColor: "brown",
                    borderRadius: '10px'
                }}> New Item </Link>
            </div>
        </nav>


        <Outlet />
       </div>
        
     );
}
 
export default Navbar;