import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
}

export default Layout;