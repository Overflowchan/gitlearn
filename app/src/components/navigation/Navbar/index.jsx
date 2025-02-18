import Heading from "../../common/Heading"
import "./style.scss"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar-wrapper">
            <Link to="/" >
                <Heading size={2} title="IMKAT TRANSPORTATION INC" />
            </Link>

            <div className="links">
                <Link to="/about" >ABOUT US</Link>
                <Link to="/careers" >CAREERS</Link>
                <Link to="/team">TEAM</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/faq">FAQ</Link>
            </div>

            <div className="auth-section">
                <Link to="/contacts"> <button className="btn btn-warning">
                    CONTACTS
                </button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;