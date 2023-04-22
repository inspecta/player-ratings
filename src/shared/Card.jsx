import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <div className="
    w-3/4 bg-white mx-auto rounded-lg gap-5 mb-4 p-2 border border-pallete-200
    border-opacity-[0.1] lg:w-1/2 relative md:p-3 lg:p-5"
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
