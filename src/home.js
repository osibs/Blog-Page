// import { useEffect, useState } from "react"; 
import Stories from "./stories";
import Usefetch from "./usefetch";

const Home = () => { 
      //i deleted the habdle delete because we dint need it anymore bevcause we are going to create a request sender to our json server now since we are fetching our data from the json file
        // const Handledelete = (id) => {
        //     const newblog = blog.filter(blogs => blogs.id !== id)
        //     setBlog(newblog);
        // }

        const {data : blog, isloading, error} = Usefetch('http://localhost:8000/blogs') //WE JUST USE ONE LINE OF CODE INSTEAD OF WRITING THE USEFETCH.JS CODE EVERYWHERE WE NEED IT. 
        
   

    return ( 
        <div className="home">
            
            {error && <div> {error} </div>}
            {isloading && <div> {'Loading...'} </div>}
            {/* we used && below because the ampersand would logically skip the second statement if the first is null, therefore, it wont display the second */}
          { blog && <Stories blog={blog} title="All Blogs" /> }
            {/* <Stories blog={blog.filter((blog) => blog.name === 'Osibs' )} title="Osibs' Blogs" />  */}
        </div>
     ); 
}
 
export default Home;