
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './style.css'
import {motion} from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function GridComponent({coin,delay}){

    const [rate,setRate] = useState(coin.price_change_percentage_24h )
    const navigate = useNavigate();

    return (
        <Link to={`/coin/${coin.id}`}>
            <motion.div 
                className={rate > 0 ? 'grid-container green-border' : 'grid-container red-border'}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay }}
                
            >
                <div className='info-flex'>
                    <img src={coin.image} className='coin-logo'></img>
                    <div className='name-col'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                </div>
                {
                    coin.price_change_percentage_24h > 0 ? (
                        <div className='chip-flex'>
                            <div className='price-chip'>
                                {coin.price_change_percentage_24h.toFixed(2)} %
                            </div>
                            <div className='arrow-green'>
                                <TrendingUpRoundedIcon/>
                            </div>

                        </div>

                    ):
                    (
                        <div className='chip-flex chip-flex-red'>
                            <div className='price-chip red'>
                                {coin.price_change_percentage_24h.toFixed(2)} %
                            </div>
                            <div className='arrow-red'>
                                <TrendingDownRoundedIcon/>
                            </div>

                        </div>
                    )
                }

                <h3 className={coin.price_change_percentage_24h >0 ? 'rate-green' : 'rate-red'}>${coin.current_price.toLocaleString()}</h3>
                <p className='vol-market'>Total Volume: ${coin.total_volume.toLocaleString()}</p>
                <p className='vol-market'>Total Cap: ${coin.market_cap.toLocaleString()}</p>
            </motion.div>
        </Link>
    )
}

export default GridComponent