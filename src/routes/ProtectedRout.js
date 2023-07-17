import { Navigate } from "react-router-dom";

function ProtectedRout({ isLoggedIn, children }) {
    if (!isLoggedIn) {
			return <Navigate to="/home" replace />;
    } else {
			return children;
		}
    
}

export default ProtectedRout;