import React from 'react'

const Card = ({children}) => {
  return (
    <div className="w-3/4 bg-white mx-auto rounded-lg flex gap-5 mb-4 p-4">
      {children}
    </div>
  )
}

export default Card