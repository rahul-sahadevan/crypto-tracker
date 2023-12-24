import axios from "axios";

function getCoinData (id){
    const url = `https://api.coingecko.com/api/v3/coins/${id}`
    const myData = axios.get(url)
    .then((response)=>{
        return response.data
    })
    .catch((error)=>{
        console.log(error.message)
    })

    return myData
}
export default getCoinData