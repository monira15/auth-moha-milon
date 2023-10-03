import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
// import Home from './Home';

const Navber = () => {

  const {user,logout} =useContext(AuthContext)

const handlelogout =()=>{
  logout()
  .then(() =>console.log('this is handlelogout'))
  .catch(error =>console.log(error))
}

    const navLinks=<>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>login</NavLink></li>
    <li><NavLink to='/register'>register</NavLink></li>
    <li><NavLink to='/orders'>orders</NavLink></li>
    {
      user && <>
  <li><NavLink to='/profile'>profile</NavLink></li>
  <li><NavLink to='/dashboard'>dashboard</NavLink></li>
  </>
    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <>
       <span>{user.email}</span>
       <a onClick={handlelogout} className="btn btn-sm">sign out</a>
       </>:
       <Link to ="/login">  <button  className="btn btn-sm">login</button></Link>
     
    }
   
  </div>
</div>
    );
};

export default Navber;