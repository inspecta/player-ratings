import React from 'react';
import PropTypes from 'prop-types';

const RatingStats = ({ data }) => {
  let average = data.reduce(
    (acc, cur) => (acc + cur.rating), 0,
  ) / data.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="w-3/4 flex justify-between mx-auto py-4 text-xl text-white">
      <h4>
        {data.length}
        <span className="px-1">Players</span>
      </h4>
      <h4>
        Average Rating :
        <span className="px-1">{average.isNaN ? 0 : average}</span>
      </h4>
    </div>
  );
};

RatingStats.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default RatingStats;
