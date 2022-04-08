import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {

  const { image, name, symbol } = coin;
  return (
    <Link to={`/coin-details/${coin.id}`}>

      <div className='flex justify-evenly items-center gap-5 bg-slate-100 rounded-full py-3 cursor-pointer'>
        <div>
          <img width={80} src={image} alt="" />
        </div>
        <div>
          <h2 className='text-2xl font-bold'>{name}</h2>
          <h2 className='text-yellow-700 font-bold'>{symbol}</h2>
        </div>
      </div>

    </Link>
  );
};

export default CoinCard;