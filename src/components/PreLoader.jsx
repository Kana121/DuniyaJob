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
        <div className="preloader no-scrollbar">
            <div className=' space-x-3 texts-container '>
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