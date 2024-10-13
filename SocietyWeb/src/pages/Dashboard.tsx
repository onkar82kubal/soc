import React from 'react'
// import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'
import Maincontent from '../components/Maincontent'
import Navigationclose from '../components/Navigationclose'

const Dashboard = () => {
  return (
    <div id="wrapper" className="theme-cyan">
        {/* <Loader /> */}
        <Navbar />
        <Leftside />
        <Rightside />
        <Maincontent />
    </div>
  )
}

export default Dashboard