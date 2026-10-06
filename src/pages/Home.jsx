import React from 'react'

import Navbar from '../component/Navbar'
import { Hero } from '../component/Hero'
import { Blogs } from '../component/Blogs'
import { Footer } from '../component/Footer'


function Home(){
    return (
        <div className=''>
        
            
            <Navbar/>
            <Hero/>
            <Blogs/>
            <Footer/>  
           
            

            
        </div>
    )
}
export default Home