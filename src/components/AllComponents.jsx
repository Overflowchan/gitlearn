import { Routes, Route, useLocation } from "react-router-dom";
import LendingPage from "./LandingPage"
import Layout from './Layout'
import About from "./LandingPage/About";
import Career from "./LandingPage/Career";
import OurTeam from "./LandingPage/OurTeam";
import Faq from "./LandingPage/Faq";
import Contacts from "./LandingPage/Contacts";
import Blog from "./LandingPage/Blog"
import BlogDetails from "./LandingPage/Blog/BlogDetails";
import NotFound from "./common/NotFound"

function AllComponents() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
                <Route index element={<LendingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Career />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;