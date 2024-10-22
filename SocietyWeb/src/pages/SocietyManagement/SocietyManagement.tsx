import React from 'react'
import { Navbar } from 'react-bootstrap'
import Leftside from '../../components/Leftside'
import Rightside from '../../components/Rightside'
import Societycontent from './Societycontent'

const SocietyManagement = () => {
  return (
    <div id="wrapper" className="theme-cyan">
      <div className='dashBoard'>
        <Navbar />
        <Leftside />
        <Rightside />
        <Societycontent />
      </div>
        
    </div>
  )
}

export default SocietyManagement