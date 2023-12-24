import { useState } from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';

function Search({search, onChangeSearch}){

    return (
        <div className='search-div'>
            <SearchIcon/>
            <input type='text' placeholder='Search' className='search-box' value={search} onChange={(e)=>onChangeSearch(e)} ></input>
        </div>
    )
}

export default Search