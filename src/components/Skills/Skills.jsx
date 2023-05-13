/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
    return (
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {
                skills.map((skill) => {
                    return (
                        <li className="px-2 py-3 border-b border-secondary">
                            {skill.name}
                        </li>
                    )
                })
            }
        </ul>
    );
}

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })).isRequired,
}

export default Skills;
