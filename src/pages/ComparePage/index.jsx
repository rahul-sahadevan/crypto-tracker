import { useState ,useEffect} from "react"
import SelectDays from "../../components/Coins/SelectDays"
import Header from "../../components/Commons/Header"
import SelectCoin from "../../components/Compare/SelectCoin"
import './style.css'
import { coinObject } from "../../functions/convertObject"
import getCoinData from "../../functions/getCoinData"
import { getCoinPrice } from "../../functions/getCoinPrice"
import Loader from "../../components/Commons/Loader"
import ListComponent from "../../components/Dashboard/List"
import CoinInfo from "../../components/CoinInfo"
import settingChartData from '../../functions/settingChartData';
import LineChart from "../../components/Coins/LineChart"
import TogglePriceType from "../../components/Coins/PriceType"

function ComparePage(){
    const [crypto1,setCrypto1] = useState('bitcoin')
    const [crypto2,setCrypto2] = useState('ethereum')
    const [crypto1Data,setCrypto1Data] = useState({})
    const [crypto2Data,setCrypto2Data] = useState({})
    const [days,setDays] = useState(30)
    const [isLoading,setIsLoading] = useState(false);
    const [priceType,setPriceType] = useState('prices');
    const [chartData,setChartData] = useState({});

    console.log(crypto1Data,crypto2Data)

    async function handleChangeDays(event){
        setIsLoading(true)
        setDays(event.target.value);
        const prices1 = await getCoinPrice(crypto1,event.target.value,priceType);
        const prices2 = await getCoinPrice(crypto2,event.target.value,priceType);
        settingChartData(setChartData,prices1,prices2)
        setIsLoading(false)
    }

    async function handleCoinChange(e,isCoin){
        setIsLoading(true)
        if(isCoin){
            setCrypto2(e.target.value)
            const data = await getCoinData(e.target.value)
            console.log(data,'crypto1')
            coinObject(setCrypto2Data,data)
            const prices1 = await getCoinPrice(e.target.value,days,priceType);
            const prices2 = await getCoinPrice(e.target.value,days,priceType);
            if(prices1.length >0 && prices2.length >0){
                setIsLoading(false);
            }
        }
        else{

            setCrypto1(e.target.value)
            const data = await getCoinData(e.target.value)
            coinObject(setCrypto1Data,data)        
        }
        
    }

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        setIsLoading(true);
        const data1 = await getCoinData(crypto1)
        
        if(data1){
            const data2 = await getCoinData(crypto2)
            coinObject(setCrypto1Data,data1)
            if(data2){
                coinObject(setCrypto2Data,data2);
                const prices1 = await getCoinPrice(crypto1,days,'prices');
                const prices2 = await getCoinPrice(crypto2,days,'prices');
                settingChartData(setChartData,prices1,prices2)
                setIsLoading(false)
            }
        }

    }

    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true)
        setPriceType(event.target.value)
        const prices1 = await getCoinPrice(crypto1,days,newType);
        const prices2 = await getCoinPrice(crypto2,days,newType);
        settingChartData(setChartData,prices1,prices2)
        setIsLoading(false)
        
    };


    return (
        <div>
            {
                isLoading ? (
                    <Loader/>
                ):
                (
                    <div>
                       <Header/>
                       <div className="coin-day-flex">
                            <SelectCoin 
                                crypto1={crypto1} 
                                crypto2={crypto2} 
                                handleCoinChange={handleCoinChange}
                                
                            />
                            <SelectDays days={days} handleChangeDays={handleChangeDays} noPtag={true}/>
            
                       </div>
                       <div className='coin-wrapper'>
                            <ListComponent coin={crypto1Data} delay={0.1}/>
                        </div>
                       <div className='coin-wrapper'>
                            <ListComponent coin={crypto2Data} delay={0.1}/>
                        </div>
                        <div className="coin-wrapper">
                            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                            <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
                        </div>
                        <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc}/>
                        <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc}/>
                    </div>
    
                )
            }

        </div>
    )
}

export default ComparePage