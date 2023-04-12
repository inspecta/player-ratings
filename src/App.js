import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import RatingForm from './components/RatingForm';
import RatingList from './components/RatingList';
import RatingStats from './components/RatingStats';
import playersData from './data/playersData';

function App() {
  const [ratingData, setRatingData] = useState(playersData);

  const deletePlayerRating = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setRatingData(
        ratingData.filter((x) => x.id !== id),
      );
    }
  };

  const handleAddNewRating = (newRatingObj) => {
    const newId = uuidv4();
    const newRatingObjWithId = { ...newRatingObj, id: newId };
    setRatingData([newRatingObjWithId, ...ratingData]);
  };

  return (
    <div className="
      font-nunito h-screen"
    >
      <Header />
      <RatingForm addNewRating={handleAddNewRating} />
      <RatingStats data={ratingData} />
      <RatingList
        data={ratingData}
        handleDelete={deletePlayerRating}
      />
    </div>
  );
}

export default App;
