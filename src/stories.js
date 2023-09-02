import { useEffect } from "react";
import { Link } from "react-router-dom";

const Stories = ({ blog , title,}) => {
// const blog = props.blog;  the one appended to the prop is the 'blog=' in home.js
// const title = props.title;



    return ( 
        <div>
            <h2> {title} </h2>
            {blog.map((blogs) => (
                <div className="bloglist" key={blogs.id}> 
                
                    <Link to={`/blogs/${blogs.id}`}>  
                    
                    <p> {blogs.word}</p> 

                    <h2> Story by {blogs.name}</h2> 
                    </Link>
                    
                    

                    {/* same, wedont need this button to delete since we are vreating a get request to delete w json */}
                    {/* <button onClick={() => Handledelete(blogs.id)} > Delete Blog </button> */}
                </div>
                
            ))}    
        </div>
     );
}
 
export default Stories;