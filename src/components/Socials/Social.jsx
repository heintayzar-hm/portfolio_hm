import PropTypes from "prop-types";

const Social = ({ name, value, icon }) => {
    return (
        <li>
            <a href={value} className="hover:text-secondary" target="_blank" rel="noreferrer" alt={name}>{icon}</a>
        </li>
    );
  };

Social.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}
  export default Social;
