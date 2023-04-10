import React from 'react'
import RatingItem from './RatingItem'

const RatingList = ({ data }) => {
  if (!data || !data.length) {
    return <p>No player ratings available.</p>
  }

  return (
    <div>
      {data.map((player) => (
        <RatingItem key={player.id} player={player}/>
      ))}
    </div>
  )
}

export default RatingList