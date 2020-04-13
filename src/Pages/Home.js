import React from 'react';
import HomeNav from '../Components/HomeNav';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user);
  const text = user ? (
    <h1> Hey, {user.name}!</h1>
  ) : (
    <h4>Nobody is logged in</h4>
  );

  return (
    <div>
      {text}
      <HomeNav/>
    </div>    
  )
}
  
  

export default Home;


