

import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css'
export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  
  return (
    <div className='toggle-price'>
        <ToggleButtonGroup
        color="primary"
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        aria-label="Platform"
        sx={{
            "&.Mui-selected": {
            color: "var(--blue) !important",
            },
            borderColor: "var(--blue)",
            border: "unset !important",
            "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
            },
            "& .MuiToggleButton-standard": {
            color: "var(--blue)",
            },
        }}
        >
        <ToggleButton value="prices" className='toggle-btn'>PRICE</ToggleButton>
        <ToggleButton value="total_volumes" className='toggle-btn'>TOTAL VOLUME</ToggleButton>
        <ToggleButton value="market_caps" className='toggle-btn'>MARKET CAP</ToggleButton>
        </ToggleButtonGroup>

    </div>
  );
}