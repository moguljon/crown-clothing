import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/' className='option'>Home</Link>
                <Link to='/shop' className='option'>Shop</Link>
                <Link to='/shop' className='option other'>Contact</Link>
                {
                    currentUser ? <span className='option' onClick={() => auth.signOut()}>Sign Out</span>
                    : <Link to='/signin' className='option'>Sign In</Link>
                }
            </div>
        </div>
    )
}

export default Header;