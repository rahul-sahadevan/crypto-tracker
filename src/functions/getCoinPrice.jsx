import axios from "axios"
export const getCoinPrice = (id,days,priceType)=>{
    const url = `https://api.coingecko.com/api/v3/coins/${id}`
    console.log(priceType)
    const myData = axios.get(`${url}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((response)=>{
            console.log(response.data)
            return response.data[priceType]
        })
        .catch((error)=>{
            console.log(error.message);
        })

        return myData

}