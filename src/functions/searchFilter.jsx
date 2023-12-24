

export const searchFilter = (search,coins)=>{
    
    const filter = coins.filter((coin)=> coin.symbol.toLowercase() === search.toLowercase())
    return filter;
}