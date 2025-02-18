import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-text">Oops! Page not found.</p>
                <Link to="/" className="not-found-link">Go to Homepage</Link>
            </div>
        </div>
    );
}

export default NotFound;
