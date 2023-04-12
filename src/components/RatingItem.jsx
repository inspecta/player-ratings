import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from '../shared/Card';

const RatingItem = ({ player, handleDelete }) => (
  <Card className="flex flex-row">
    <div className="rounded-lg text-3xl text-pallete-100 font-bold
    text-center w-[100px] p-4 absolute inset-0 flex justify-center items-center
    bg-gradient-to-r from-pallete-50 to-gray-100"
    >
      {player.rating}
    </div>
    <div className="flex-grow ml-[100px]">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-2xl font-bold text-pallete-300">{player.name}</h1>
        <button type="button" onClick={() => handleDelete(player.id)}>
          <FaTimes className="cursor-pointer text-pallete-300 hover:text-red-600" />
        </button>
      </div>
      <p className="text-sm text-justify">{player.reason}</p>
    </div>
  </Card>
);

RatingItem.propTypes = {
  player: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RatingItem;
