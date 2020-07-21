import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/manage" className="item">
                Room Management
            </Link>
            <div className="menu right">
                <Link to="/test" className="item">
                    Test Room
                </Link>
            </div>
        </div>
    )
}

export default Header;