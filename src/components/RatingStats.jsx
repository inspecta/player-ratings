import React from 'react';
import PropTypes from 'prop-types';

const RatingStats = ({ data }) => {
  let average = data.reduce(
    (acc, cur) => (acc + cur.rating), 0,
  ) / data.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="w-3/4 flex justify-between mx-auto py-4 text-xl text-white
    lg:w-1/2"
    >
      <h4>
        <span className="px-1">Players</span>
        (
        {data.length}
        )
      </h4>
      <h4>
        Average Rating :
        <span className="px-1">{average.isNaN ? 0 : average}</span>
      </h4>
    </div>
  );
};

RatingStats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    rating: PropTypes.number.isRequired,
  })).isRequired,

};

export default RatingStats;
