import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    setLoading(true);

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
      .then(data => {
        //console.log(data.data);
        setCoins(data.data)
        setLoading(false);

      })


  }, [])

  return (
    <>

      {
        loading ? <Spinner></Spinner> :
          <div>
            <h1 className='text-center'>Coins: {coins.length}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5'>
              {
                coins.map(coin => < CoinCard
                  key={coin.id}
                  coin={coin}
                />)
              }
            </div>
          </div>
      }

    </>
  );
};

export default Coins;