import React from 'react';
import Nav from '../Components/Navbar'
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user);
  const text = 
    <div className="user">
      <h1> Hey, {user.name}!</h1>
      <img alt="profile_pic" src={user.profile_pic} />
    </div>
    
  return (
    <div>
      <Nav/>
      {text}
    </div>    
  )
}
  
  

export default Home;


