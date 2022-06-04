import React, { useState } from 'react';
const NavBar = () => {
    return (
        <>
            <div className='bg-primary position-relative' style={{ height: '60px' }}>
                <img src={require('../../assets/images/logo/logo.jpg')} className='img-fluid position-absolute' width='110px' alt='葳茗餛飩logo' style={{left:'20px'}}/>
            </div>
        </>
    )
}
export default NavBar