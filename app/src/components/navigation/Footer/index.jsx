import React from 'react';
import logo from '../../../assets/icons/logo-company.jpg'
import './style.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={logo} alt="logo-company" />
                        <p>High-level transport solutions.</p>
                    </div>
                    <div className="footer-section">
                        <h5>About us</h5>
                        <ul>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/faq">Faq</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h5>Contacts</h5>
                        <ul>
                            <li><a href="/contacts">Contacts</a></li>
                            <li><a href="/contacts">Work with us</a></li>
                            <li><a href="/contacts">Complaints and suggestions</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h5>Follow us</h5>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f">Facebook</i></a>
                            <a href="#"><i className="fab fa-instagram">Instagram</i></a>
                            <a href="#"><i className="fab fa-linkedin">Linkedin</i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <h1 className="developer-note">Designed and developed by <a href="https://www.linkedin.com/in/feruz-aliev-85aaa7311/" target="_blank" rel="noopener noreferrer">Feruz Aliev</a></h1>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
