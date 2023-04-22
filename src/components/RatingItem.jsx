import { useState } from 'react';
import {
  FaEdit, FaTimes, FaSave, FaTrash,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from '../shared/Card';

const RatingItem = ({ player, handleDelete, handleReasonUpdate }) => {
  const [editingReason, seteditingReason] = useState(false);
  const [reason, setReason] = useState(player.reason);

  const handleEdit = () => {
    seteditingReason(true);
  };

  const handleCancelEdit = () => {
    seteditingReason(false);
    setReason(player.reason);
  };

  const handleSave = () => {
    seteditingReason(false);
    handleReasonUpdate(player.id, reason);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
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
          <div>
            {editingReason ? (
              <>
                <button type="button" onClick={() => handleSave(player.id, reason)}>
                  <FaSave className="mr-2 text-pallete-50 hover:text-pallete-100" />
                </button>
                <button type="button" onClick={handleCancelEdit}>
                  <FaTimes className="mr-2 text-pallete-200 hover:text-red-600" />
                </button>
              </>
            ) : (
              <>
                <button type="button" onClick={handleEdit}>
                  <FaEdit className="mr-2 text-pallete-50 hover:text-pallete-100" />
                </button>
                <button type="button" onClick={() => handleDelete(player.id)}>
                  <FaTrash className="cursor-pointer text-pallete-200 hover:text-red-600" />
                </button>
              </>
            )}
          </div>
        </div>
        {editingReason ? (
          <textarea
            name="reason"
            rows="3"
            placeholder="Add reason for rating."
            onChange={handleReasonChange}
            value={reason}
            id="reason"
            className="input-control focus:outline-0 focus:border-green-400
            w-full text-sm text-justify"
            required
          />
        ) : (
          <p className="text-sm text-justify">{player.reason}</p>
        )}
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
  handleDelete: PropTypes.func.isRequired,
  handleReasonUpdate: PropTypes.func.isRequired,
};

export default RatingItem;
