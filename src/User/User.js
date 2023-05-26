import './User.scss';
import avtar from '../pics/Neelesh Tiwari Pic.jpeg';
import coverpic from '../pics/coverpic.jpg';
import LaptopIcon from '@mui/icons-material/Laptop';
import CodeIcon from '@mui/icons-material/Code';
import AddchartIcon from '@mui/icons-material/Addchart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const User = () =>{
    const user = {
        name: 'Neelesh Tiwari',
        age: 21,
        email: 'neeleshishu021@gmail.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus ligula at elit tincidunt, a finibus est hendrerit.',
        avatar: {avtar}, // Replace with your avatar image URL
        background: {coverpic}, // Replace with your background image URL
      };
    
      return ( 
        <>
          <div className='mainblock'>

          <div className='img'>
            <img src={avtar} alt='profile'/>
          </div>
          <div className='mainheading'>
            <h1>My name is {user.name}.</h1>
            <h1>Software Developer</h1>
            
          </div>
          <div className='skills'>
            <div className='skill'>
           <span><LaptopIcon style={{fontSize: "xxx-large"}}/></span>
           <p>Web Developer</p>
           <div className='colorr'></div>
            </div>
            <div className='skill'>
            <span><CodeIcon style={{fontSize: "xxx-large"}}/></span>
            <p>C++ Developer</p>
            <div className='colorr'></div>
            </div>
            <div className='skill'>
              <span><AddchartIcon style={{fontSize: "xxx-large"}}/></span>
              <p>Mern Stack developer</p>
              <div className='colorr'></div>
            </div>
            <div className='skill'>
              <span><AdminPanelSettingsIcon style={{fontSize: "xxx-large"}}/></span>
              <p>Agile Software Developer</p>
            </div>
          </div>


          </div>
        </>
      );
    };

    export default User;