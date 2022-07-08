import React, { useState } from 'react';
const Stop = () => {
    let style = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }
    return (
        <>
            <div className='bg-primary position-relative' style={{ minHeight: '100vh' }}>
                <div className='text-light position-absolute' style={style}>
                    <h5 className='fw-bolder text-center'>目前暫無供應</h5>
                    <h5 className='fw-bolder text-center mt-3'>造成您的困擾請見諒</h5>
                </div>
            </div>
        </>
    )
}
export default Stop