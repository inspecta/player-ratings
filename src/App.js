import { useState } from 'react';
import Header from './components/Header';
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

  return (
    <div className="bg-blue-400 h-screen">
      <Header />
      <RatingStats data={ratingData} />
      <RatingList
        data={ratingData}
        handleDelete={deletePlayerRating}
      />
    </div>
  );
}

export default App;
