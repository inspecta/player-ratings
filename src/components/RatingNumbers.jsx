import { useState } from 'react';
import PropTypes from 'prop-types';

const RatingNumbers = ({ select }) => {
  const [selected, setSelected] = useState(0);

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
    <div className="w-3/4 mx-auto">
      <ul className="
        w-full grid grid-cols-4 flex-grow md:grid md:grid-cols-5
        lg:grid-cols-10"
      >
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
                className="w-8 cursor-pointer hover:border-pallete-50
                hover:fill-pallete-50 checked:bg-pallete-100 checked:border-red-500"
                required
              />
              <span htmlFor={x[0]} className="text-pallete-400 font-bold">{x[1]}</span>
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
