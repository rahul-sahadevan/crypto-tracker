
import Button from '../Button'
import TemporaryDrawer from './Drawer'
import { Link } from 'react-router-dom'
import './style.css'

function Header(){

    return (
        <div className='nav-bar'>
            <h1 className='logo'>Crypto Tracker <span style={{color:'var(--blue)'}}>.</span></h1>
            <div className='links'>
                <Link to='/'>
                    <p className='link'>Home</p>
                </Link>
                <Link to='/comparepage'>
                    <p className='link'>Compare</p>
                </Link>
                <Link to='/watchlist'>
                    <p className='link'>Watchlist</p>
                </Link>
                <Link to='/dashboard'>
                    <Button text={'Dashboard'} />
                </Link>
            </div>
            <div className='drawer'>
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header