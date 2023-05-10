import HomePage from './components/HomePage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DiscoverMutualFunds from './Mutual Funds pages/DiscoverMutualFunds';
// import { Switch } from 'antd';
// import Navbar from './components/Navbar';

function App()   {
  
  return (
    <div className="App">
      
      <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/aboutus" element={<h1>About Us</h1>}/>
      <Route path="/contactus" element={<h1>Contact Us</h1>}/>
      <Route path="/discovermutualfunds" element={<DiscoverMutualFunds/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
