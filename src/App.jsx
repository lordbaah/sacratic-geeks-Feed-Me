import React from 'react'
import './index.css'
import FoodListLayout from './Components/Layout/FoodListLayout'
import Hero from './Components/Layout/Hero'
import TestComp from './TestComp'
import Test from './Test'

const App = () => {
  return (
    <>
       <Hero/>
       <FoodListLayout/>
       <footer className='mt-8'>
        <div className='custom-screen py-4 flex items-center justify-between'>
          <p>CopyRight @2024</p>
          <a href="" target='blank'>Built with FeedMe Api</a>
        </div>
       </footer>
    </>
  )
}

export default App
