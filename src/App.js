import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllGun from './Components/AllGun/AllGun';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1);
  }


  return (
    <div className="">
      <Navbar count={count}></Navbar>
      <AllGun countIncrease={countIncrease}></AllGun>
    </div>
  );
}

export default App;
