import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {

  const { coinId } = useParams();

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then(data => {
        //console.log(data.data);
        setCoin(data.data)
        setLoading(false);
      })


  }, [coinId])


  return (
    <>
      {
        loading ? <Spinner></Spinner> :
          <section className='mx-10 flex justify-center bg-slate-500 h-[70vh]'>
            <div className='flex flex-col lg:flex-row xl:flex-row md:flex-row sm:flex-col items-center justify-evenly bg-slate-50 w-full'>

              <div className="info ">
                <h2 className='text-2xl'>General Info:  { }</h2>
                <p>coin Name:  {coin.name}</p>
                <p>Market Cap Rank:  {coin.market_cap_rank}</p>
                <p>Origin: {coin.country_origin ? coin.country_origin : "Not Found"} </p>
                <p>Contract Address: {coin.contract_address} </p>
                <p>Hashing Algorithm: {coin.hashing_algorithm} </p>
                <p>Genesis Date:  {coin.genesis_date}</p>
                <p>Last Updated:  {coin.last_updated}</p>
                <br />
                <h2 className='text-2xl'>Scores:  </h2>
                <p>Community Score: {coin.community_score}</p>
                <p>Developer Score: {coin.developer_score}</p>
                <p>Liquidity Score: {coin.liquidity_score}</p>
                <p>Public Interest Score: {coin.public_interest_score}</p>
              </div>

              <div className="image">
                <img src={coin.image?.large} alt="" />
              </div>


            </div>
          </section>
      }


    </>
  );
};

export default CoinDetails;