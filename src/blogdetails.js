import { useParams } from "react-router-dom";
import Usefetch from "./usefetch";
import { useNavigate } from 'react-router-dom';


const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, error, isloading} = Usefetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then (() => {
            navigate('/')
        })
    }

    return ( 
        <div className="blog-details"> 
            {isloading && <div> loading... </div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p> {blog.word} </p>
                    <p> written By {blog.name}</p>
                    <button onClick={handleClick}> Delete </button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;