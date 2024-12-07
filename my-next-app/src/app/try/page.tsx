import React from 'react'

import "./style.css"
import Hero from '../../../components/hero'

import { FaHome } from 'react-icons/fa'
import Grid from '../../../components/Grid'
import { FloatingNav } from '../../../components/UI/floatingNavbar'

const page = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center
    flex-col overflow-hidden mx-auto sm:px-10
 px-5'>
  <div className='max-w-7xl w-full'>
    {/* <F navItems={[
      {name:"Home" , link:"/" , icon:<FaHome /> }
    ]} /> */}
    <FloatingNav navItems={[{
      name:"Home",link:"/" , icon:<FaHome />
    }]} />
    
     <Hero />
    <Grid />
  </div>
 </main>
    // <div >ArulDhanush S R
    // <p className="page">hello</p>
    // <p className='relative bg-black'>dgygv</p>
    // </div>
    
  )
} 

export default page