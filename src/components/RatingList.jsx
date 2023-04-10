import PropTypes from 'prop-types';
import RatingItem from './RatingItem';

const RatingList = ({ data, handleDelete }) => {
  if (!data || !data.length) {
    return <div className="text-xl text-white px-4">No player ratings available.</div>;
  }
  return (
    <div>
      {data.map((player) => (
        <RatingItem
          key={player.id}
          player={player}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

RatingList.propTypes = {
  data: PropTypes.objectOf.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RatingList;
