import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size}) => {
    return(
        <div 
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        className={`${size} menu-item`}>
        <div className='background-image'>
            
        </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Show Now</span>
            </div>
        </div>
    )
}

export default MenuItem;