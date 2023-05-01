import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayout() {
    return(
        <>
            <nav className="host-nav">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">income</Link>
                <Link to="/host/reviews">reviews</Link>
            </nav>
            <Outlet/>
        </>
        
    )
}