import { useState } from 'react';
import Header from './components/Header';
import RatingList from './components/RatingList';
import playersData from './data/playersData';

function App() {
  const [ratingData, setRatingData] = useState(playersData);

  return (
    <div className="bg-blue-400 h-screen">
      <Header />
      <RatingList data={ratingData} />
    </div>
  );
}

export default App;
