import { useState } from "react"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import {motion } from "framer-motion";
import { convertNumbers } from "../../../functions/convertNumber";
import './style.css'
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
function ListComponent({coin,delay}){
    console.log(coin,'xxxx')
   

    return (
        <Link to={`/coin/${coin.id}`}>
            <motion.tr 
                className='list-row'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: delay }}
            >
                <td className='td-image'>
                        <img src={coin.image} className='coin-logo td-logo'></img>
                </td>
                <td >
                    <div className='name-col '>
                        <p className='coin-symbol td-name1 '>{coin.symbol}</p>
                        <p className='coin-name td-name2'>{coin.name}</p>
                    </div>
                </td>
            
                {
                    coin.price_change_percentage_24h > 0 ? (
                        <Tooltip title='prize change'>
                            <td className='chip-flex'>
                                <div className='price-chip td-price'>
                                    {coin.price_change_percentage_24h.toFixed(2)} %
                                </div>
                                <div className='arrow-green td-icon'>
                                    <TrendingUpRoundedIcon />
                                </div>

                            </td>
                        </Tooltip>

                    ):
                    (
                        <td className='chip-flex chip-flex-red'>
                            <div className='price-chip red td-price'>
                                {coin.price_change_percentage_24h.toFixed(2)} %
                            </div>
                            <div className='arrow-red td-icon'>
                                <TrendingDownRoundedIcon />
                            </div>

                        </td>
                    )
                }
                <Tooltip title='Current Prize'>
                    <td className={coin.price_change_percentage_24h >0 ? 'rate-green' : 'rate-red'}>${coin.current_price.toLocaleString()}</td>
                </Tooltip>
                <Tooltip title='total volume'>
                    <td className='vol-market td-vol'>${convertNumbers(coin.total_volume)}</td>
                </Tooltip>
                <Tooltip title='market cap'>
                    <td className='vol-market'>${convertNumbers(coin.market_cap)}</td>
                </Tooltip>
            </motion.tr>
        </Link>
    )
}

export default ListComponent