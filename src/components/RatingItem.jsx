import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from '../shared/Card';

const RatingItem = ({ player }) => {
  const handleClose = (id) => {
    console.log(id);
  };

  return (
    <Card>
      <div className="border border-blue-950 rounded-lg text-3xl
      text-center w-[100px] p-4"
      >
        {player.rating}
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-xl">{player.name}</h1>
          <button type="button" onClick={() => handleClose(player.id)}>
            <FaTimes color="blue" className="cursor-pointer" />
          </button>
        </div>
        <p className="text-sm">{player.reason}</p>
      </div>
    </Card>
  );
};

RatingItem.propTypes = {
  player: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default RatingItem;
