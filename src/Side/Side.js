import './Side.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';


const Side = () =>{
    return(
        <>
        <div className='sidebar'>
        <h1>Board.</h1>
        
        <div className='options'>
        <Link to={'/'}>
            <div className='buttons'>
            <span><DashboardIcon/></span>
            <p>Dashboard</p>
            </div>
            </Link>
            <div className='buttons'>
            <span><LocalOfferIcon/></span>
            <p>Transaction</p>
            </div>
            <div className='buttons'>
            <span><PendingActionsIcon/></span>
            <p>Scheduleing</p>
            </div>
            <Link to={'/user'}>
            <div className='buttons'>
            <span><AccountCircleIcon/></span>
            <p>User</p>
            </div>
            </Link>
            
            
            <div className='buttons'>
            <span><SettingsIcon/></span>
            <p>Setting</p>
            </div>
        </div>

        <div className='footer'>
            <p>Help</p>
            <p>Contact us</p>
        </div>
        
        </div>
        
        </>
    )
}

export default Side;