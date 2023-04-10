import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <div className="w-3/4 bg-white mx-auto rounded-lg flex gap-5 mb-4 p-4">
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      reason: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Card;
