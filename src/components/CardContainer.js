import React from 'react';
import Leaderboard from "./Leaderboard";

const CardContainer = () => {
    return (
        <div className="m-3 bg-blue-200 rounded-md w-full shadow-md">
          <div className='block h-64'>
              <Leaderboard />
          </div>
        </div>
    )
}

export default CardContainer;