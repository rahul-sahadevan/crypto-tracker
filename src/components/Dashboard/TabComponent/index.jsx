import { useState } from 'react';
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import './style.css'
import GridComponent from '../Grid';
import ListComponent from '../List';

export default function TabComponent({coins}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color:'var(--white)',
    fontSize:'18px',
    fontWeight:'600'
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <ThemeProvider theme={theme}>
            <TabContext value={value} >
            
                <TabList onChange={handleChange} variant='fullWidth'>
                    <Tab label="Grid" sx={style} value="1" />
                    <Tab label="List" sx={style} value="2" />
                </TabList>
            
                <TabPanel value="1">
                    <div className='grid-flex'>
                      {
                        coins.map((coin,i)=>(
                          <GridComponent coin={coin} delay={((i + 2) % 5) * 0.1}/>
                          
                        ))
                      }
                    </div>
                </TabPanel>
                <TabPanel value="2">
                  <table className='list-flex'>
                    {
                      coins.map((coin,i)=>(
                        <ListComponent coin={coin} delay={(i % 2) * 0.1}/>
                      ))
                    }
                  </table>
                </TabPanel>
            </TabContext>
        </ThemeProvider>
    </Box>

  );
}