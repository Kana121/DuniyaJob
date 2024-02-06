import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations/'
// import logo from '../../src/assets/dj-white.png'
import "./preloader.css"


const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);
    return ( 
    <>
<<<<<<< Updated upstream
        <div className="preloader">
            <div className='texts-container '>
=======
        <div className="preloader no-scrollbar">
            <div className='space-x-3 texts-container '>
>>>>>>> Stashed changes
                <span > FIND  </span> 
                <span > THE </span> 
                <span > PERFECT  </span> 
                <span > JOBS  </span> 
                <span > HERE  </span> 
                <span > ....  </span>     
            </div>
        </div> 

        
    </>
    )
}

export default PreLoader