import { useState } from 'react';
import PropTypes from 'prop-types';

const RatingNumbers = ({ select }) => {
  const [selected, setSelected] = useState(9);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  const nums = [
    ['num1', 1],
    ['num2', 2],
    ['num3', 3],
    ['num4', 4],
    ['num5', 5],
    ['num6', 6],
    ['num7', 7],
    ['num8', 8],
    ['num9', 9],
    ['num10', 10],
  ];

  return (
    <div className="w-3/4 text-center">
      <ul className="flex">
        {nums.map((x) => (
          (
            <li key={x[1]} className="p-3 flex">
              <input
                type="radio"
                name="rating"
                id={x[0]}
                value={x[1]}
                onChange={handleChange}
                checked={selected === +`${x[1]}`}
              />
              <span htmlFor={x[0]}>{x[1]}</span>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

RatingNumbers.propTypes = {
  select: PropTypes.func.isRequired,
};

export default RatingNumbers;
