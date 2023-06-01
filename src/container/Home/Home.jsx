import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Header from '../../components/header/Header'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div >
        <div className='main-header '>
        <TopBar/>
        <Header/>
        </div>
        <Banner/>
        
    </div>
  )
}

export default Home