import { useEffect, useState } from "react"
import Header from "../../components/Commons/Header"
import TabComponent from "../../components/Dashboard/TabComponent"
import axios from "axios"
import Search from "../../components/Dashboard/Search"
import PaginationControlled from "../../components/Dashboard/Pagination"
import Loader from "../../components/Commons/Loader"
import TopButton from "../../components/Commons/BackToTop"
import myCoins from "../../functions/get100Coins"
import getCoins from "../../functions/get100Coins"


function DashboardPage(){

    const [coins,setCoins] = useState([])
    const [search,setSearch] = useState('');

    const [pageNumber, setPageNumber] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);

    const [loading,setLoading] = useState(true);
  
    const handlePageChange = (event, value) => {
      setPageNumber(value);
      var startingIndex = (value - 1) * 10;
      setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
    };


    function onChangeSearch(e){
        setSearch(e.target.value)
    }
    
    var filteredCoins = coins.filter((coin) => {
        if (
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
        ) {
          return coin;
        }
      });

      const getData = async ()=>{
        const myCoins = await getCoins();
        if(myCoins){
            setCoins(myCoins);
            setPaginatedCoins(myCoins.slice(0,10))
            setLoading(false);
        }
      }
    
    

    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
           {
               !loading ? (
                   <div>
                    <Header/>
                   <Search search={search} onChangeSearch={onChangeSearch}/>
                    <TabComponent coins={search ? filteredCoins : paginatedCoins}/>
                    <PaginationControlled page={pageNumber} handleChange={handlePageChange}/>
                    <TopButton/>
                </div>

            ):
            (

                <Loader/>
            )
           }
        </div>
    )
}

export default DashboardPage