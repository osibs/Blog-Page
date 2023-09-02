import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <div> 
            <h2> Error 404 </h2>
            <p> This Page Could not be found! </p>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default Page404;