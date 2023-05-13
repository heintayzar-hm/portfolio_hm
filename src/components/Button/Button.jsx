import PropTypes from 'prop-types';

const Button = ({ children, type, className, href }) => {
    const btnStyle = " border-4 border-secondary px-[25px] py-[12px] rounded-full hover:bg-secondary hover:text-white transition duration-300 ease-in-out";
    if (type === 'link') {
        return (
            <a href={href} className={`btn ${btnStyle} ${className}`} target='_blank' rel="noreferrer">
                {children}
            </a>
        )
    }
    return (
        <button type="button" className={`btn ${btnStyle} ${className}`}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
}

export default Button;
