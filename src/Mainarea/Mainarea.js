import './Mainarea.scss';
import SearchIcon from '@mui/icons-material/Search';
import user from '../pics/Neelesh Tiwari Pic.jpeg';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Charts from '../charts/Charts';
import { Link } from 'react-router-dom';

const Mainarea = () =>{
    return(
        <>
            <div className='mainarea'>
            <div className='upperarea'>
            <h1>Dashboard</h1>
            <div className='rightside'>
            <div className='searchbar'>
            <input type='text' placeholder='Search'/>
            <span><SearchIcon/></span>
            </div>
            <Link to={'/user'}>
            <img src={user} alt={user}/>
            </Link>
            </div>
            </div>
            <div className='boxessection'>
                <div className='boxes' style={{backgroundColor: "rgb(131, 240, 205)"}}>
                <p>Total Revenue</p>
                <span className='icons'><CurrencyExchangeIcon/></span>
                <span className='Amounts'>$1,23,234</span>
                </div>
                <div className='boxes' style={{backgroundColor: "rgb(111, 207, 236)"}}>
                <p>Total Transaction</p>
                <span className='icons'><LocalOfferIcon/></span>
                <span className='Amounts'>1,520</span>
                </div>
                <div className='boxes' style={{backgroundColor: "darkseagreen"}}>
                <p>Total Likes</p>
                <span className='icons'><ThumbUpIcon/></span>
                <span className='Amounts'>9,628</span>
                </div>
                <div className='boxes' style={{backgroundColor: "rgb(131, 240, 205)"}}>
                <p>Total Users</p>
                <span className='icons'><PeopleAltIcon/></span>
                <span className='Amounts'>892</span>
                </div>
            </div>
            <Charts/>
            </div>
        </>
    )
}

export default Mainarea;