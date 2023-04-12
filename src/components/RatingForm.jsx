import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RatingNumbers from './RatingNumbers';

const RatingForm = ({ addNewRating }) => {
  const [input, setInput] = useState({
    name: '',
    reason: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (input.name === '' || input.reason === '') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [input.name, input.reason]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newRatingObj = {
      name: input.name,
      rating,
      reason: input.reason,
    };

    addNewRating(newRatingObj);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h4 className="text-2xl">How would rate a player?</h4>
      <form className="w-full" onSubmit={handleSubmitForm}>
        <div className="mb-2">
          <input
            type="text"
            name="name"
            placeholder="Enter player name"
            onChange={handleInput}
            value={input.name}
            id="name"
            className="w-3/4 rounded-md lg:w-1/2 px-4 py-3"
            required
          />
        </div>
        <div className="">
          <textarea
            name="reason"
            rows="3"
            placeholder="Add reason"
            onChange={handleInput}
            value={input.reason}
            id="reason"
            className="w-3/4 rounded-md lg:w-1/2 px-4 py-3"
            required
          />
        </div>
        <RatingNumbers select={(rating) => setRating(rating)} />
        <div>
          <button
            type="submit"
            className="
              bg-blue-400 border rounded-md w-[100px] py-2 mt-3 hover:bg-blue-600
              hover:text-white disabled:bg-gray-300 disabled:text-gray-600
              disabled:border-0"
            disabled={isDisabled}
          >
            Rate
          </button>
        </div>
      </form>
    </div>
  );
};

RatingForm.propTypes = {
  addNewRating: PropTypes.func.isRequired,
};

export default RatingForm;
