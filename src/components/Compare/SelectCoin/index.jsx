import { useState ,useEffect} from "react"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import getCoins from "../../../functions/get100Coins";
import './style.css'

function SelectCoin({crypto1,crypto2,handleCoinChange}){

   
    const [allCoins,setAllCoins] = useState([]);

    const style = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        },
      }

    async function getData(){
        const myCoins = await getCoins();
        setAllCoins(myCoins);
    }

    useEffect(()=>{
        getData();
    },[])

    

    return (
        <div className="coin-flex">
            <p>Crypto1</p>
        <Select
          sx={style}
          value={crypto1}
          label="Crypto1"
          onChange={(event)=> handleCoinChange(event,false)}
        >
            {
                allCoins.filter((item)=> item.id != crypto2).map((coin)=>(

                    <MenuItem value={coin.id}>{coin.name}</MenuItem>
                ))
            }
        </Select>
            <p>Crypto2</p>
        <Select
         sx={style}
          value={crypto2}
          label="Crypto2"
          onChange={(event)=> handleCoinChange(event,true)}
        >
            {
                allCoins.filter((item)=> item.id != crypto2).map((coin)=>(

                    <MenuItem value={coin.id}>{coin.name}</MenuItem>
                ))
            }
        </Select>
    
        </div>
    )
}

export default SelectCoin