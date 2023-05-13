import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ className }) => {
    let location =  useLocation();
    return (
        <nav className={`flex justify-around items-center ${className}`}>
            <Link to='/' className={`text-xl hover:text-secondary ${location.pathname === '/' ? 'active underline' : ''}`}>About Me</Link>
            <Link to='/projects' className={`text-xl hover:text-secondary ${location.pathname === '/projects' ? 'active underline' : ''}`}>Projects</Link>
            <Link to='/contact' className={`text-xl hover:text-secondary ${location.pathname === '/contact' ? 'active underline' : ''}`}>Contact</Link>
        </nav>
    )
}

Navbar.propTypes = {
    className: PropTypes.string,
}

export default Navbar;
