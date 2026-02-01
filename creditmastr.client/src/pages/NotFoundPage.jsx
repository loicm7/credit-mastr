import { Link } from "react-router"; 
import notFoundImage from '../assets/notfound.png';

function NotFoundPage() {
 return (
   <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
     <img
             src={notFoundImage}
       alt="Not Found"
       className="w-1/2 max-w-md mb-6"
     />
     <h1 className="text-2xl font-bold text-gray-800 mb-4">
       Oups! Page not found.
     </h1>
     <p className="text-gray-600 mb-6">
       The page you are looking for does not exist or has been moved.
     </p>
     <Link to="/" className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
       Home
     </Link>
   </div>
 );
}

export default NotFoundPage;