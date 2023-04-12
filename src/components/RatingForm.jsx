import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RatingNumbers from './RatingNumbers';

const RatingForm = ({ addNewRating }) => {
  const [input, setInput] = useState({
    name: '',
    reason: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [rating, setRating] = useState(0);

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
    input.name = '';
    input.reason = '';
    input.rating = '';
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h4 className="text-2xl py-3">How would rate a player?</h4>
      <form className="w-full lg:w-3/4" onSubmit={handleSubmitForm}>
        <div className="mb-2">
          <input
            type="text"
            name="name"
            placeholder="Enter player name"
            onChange={handleInput}
            value={input.name}
            id="name"
            className="input-control focus:outline-0 focus:border-green-400"
            required
          />
        </div>
        <div className="">
          <textarea
            name="reason"
            rows="3"
            placeholder="Add reason for rating."
            onChange={handleInput}
            value={input.reason}
            id="reason"
            className="input-control focus:outline-0 focus:border-green-400"
            required
          />
        </div>
        <RatingNumbers select={(rating) => setRating(rating)} />
        <div>
          <button
            type="submit"
            className="
              bg-pallete-100 text-gray-50 border-0 rounded-md w-[100px] py-2 mt-3
              hover:bg-pallete-200 hover:text-white disabled:bg-gray-300 disabled:text-gray-600
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
