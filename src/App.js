import './App.css';
import Main from './Main';
import User from './User/User';
import Sign from './Signin/Sign';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {


  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />}/>
          <Route path="/user" element={<User />} />
          <Route path='/main' exact element={<Main/>} />
      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
