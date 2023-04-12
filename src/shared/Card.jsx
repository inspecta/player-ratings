import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <div className="w-3/4 bg-white mx-auto rounded-lg flex gap-5 mb-4 p-4 lg:w-1/2">
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
