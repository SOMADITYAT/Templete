import React from 'react'
import Home from '../../container/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from '../../container/Count/Count';
import Services from '../../container/Services/Services';




const App = () => {
  return (
    <div>
      <Home />
      <main id='main'>
      <Count/>
      <Services/>
      </main>
    </div>
  )
}

export default App
