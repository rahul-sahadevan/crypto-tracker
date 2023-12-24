import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './style.css'
import Loader from '../../components/Commons/Loader';
import { coinObject } from '../../functions/convertObject';
import ListComponent from '../../components/Dashboard/List';
import Header from '../../components/Commons/Header';
import CoinInfo from '../../components/CoinInfo'
import getCoinData from '../../functions/getCoinData';
import { getCoinPrice } from '../../functions/getCoinPrice';
import LineChart from '../../components/Coins/LineChart';
import convertDate from '../../functions/convertDate';
import SelectDays from '../../components/Coins/SelectDays';
import settingChartData from '../../functions/settingChartData';

import TogglePriceType from '../../components/Coins/PriceType';

function CoinPage(){
    const {id} = useParams();
    console.log(id)
    const [isLoading,setIsLoading] = useState(false);
    const [coinData,setState] = useState();
    const [days,setDays] = useState(30)
    const [chartData,setChartData] = useState({});
    const [priceType, setPriceType] = useState('prices');

 
    useEffect(()=>{
        if(id){
            getData()
        }
    },[id])

    async function getData(){
        
        const data = await getCoinData(id)
        if(data){
            coinObject(setState,data)
            const prices = await getCoinPrice(id,days,priceType);

            if(prices){
                settingChartData(setChartData,prices)
                setIsLoading(false)
            }
        }

        
    }


    const handleChangeDays = async (e)=>{
        setIsLoading(true)
        setDays(e.target.value);
        const prices = await getCoinPrice(id,e.target.value,priceType);

        if(prices){
            settingChartData(setChartData,prices)
            setIsLoading(false)
        }
    }

    

    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true)
        setPriceType(event.target.value)

        const prices = await getCoinPrice(id,days,newType);
        console.log(prices)

        if(prices.length > 0){
            settingChartData(setChartData,prices)
            setIsLoading(false)
        }

        
    };


    console.log(chartData,"chartdata")

    return (
        <div>
            {
                !coinData || !chartData || isLoading ? (
                    <Loader/>
                ):
                (
                    <div>
                        <Header/>
                        <br></br>
                        <div className='coin-wrapper'>
                            <ListComponent coin={coinData} delay={0.1}/>
                        </div>
                       <br></br>
                       
                        <div className='coin-wrapper'>
                            <SelectDays days={days} handleChangeDays={handleChangeDays}/> 
                            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                            <LineChart chartData={chartData} priceType={priceType}/>
                        </div>
                        
                        <CoinInfo heading={coinData.name} desc={coinData.desc}/>
                    </div>
                )
            }
        </div>
    )
}



export default CoinPage