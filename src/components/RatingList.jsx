import PropTypes from 'prop-types';
import RatingItem from './RatingItem';

const RatingList = ({ data, handleDelete, handleReasonUpdate }) => {
  if (!data || !data.length) {
    return (
      <div className="w-1/2 mx-auto rounded-md text-xl text-white py-1
        text-center bg-pallete-50 mt-5"
      >
        No player ratings available.
      </div>
    );
  }
  return (
    <div>
      {data.map((player) => (
        <RatingItem
          key={player.id}
          player={player}
          handleDelete={handleDelete}
          handleReasonUpdate={handleReasonUpdate}
        />
      ))}
    </div>
  );
};

RatingList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleReasonUpdate: PropTypes.func.isRequired,
};

export default RatingList;
