
import { useState } from 'react'
import './style.css'
function CoinInfo({heading,desc}){
    const shortDesc = desc.slice(0,300) + "<br/>"+ '<br/>'+  '<span  style= color:var(--grey) >Reaad More...</span>'

    function readMore(){
        if(more){
            setMore(false)
        }
        else{

            setMore(true)
        }
    }
    const [more,setMore] = useState(false);

    return(
        <div className="coin-wrapper desc-wrapper">
            <h2>{heading}</h2>
            {
                desc.length > 200 ? (
                    <p className='desc' onClick={readMore} dangerouslySetInnerHTML={{ __html: more ? desc : shortDesc }}/>          

                ):
                (
                    <p className='desc' onClick={readMore} dangerouslySetInnerHTML={{ __html:desc  }}/>  
                )
            }
        </div>
    )
}

export default CoinInfo