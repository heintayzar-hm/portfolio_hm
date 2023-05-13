import PropTypes from 'prop-types';

const HeaderText = ({ children, className }) => {
    return (
        <h1 className={`text-3xl px-2 py-3 font-thin font-secondary ${className}`}>{children}</h1>
    )
}

HeaderText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default HeaderText;
