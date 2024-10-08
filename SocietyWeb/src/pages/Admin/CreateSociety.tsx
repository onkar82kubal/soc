import React from 'react'
import { Navbar } from 'react-bootstrap'
import Leftside from '../../components/Leftside'
import Rightside from '../../components/Rightside'

const CreateSociety = () => {
  return (
    <div id="wrapper" className="theme-cyan">
        <Navbar />
        <Leftside />
        <Rightside />
        <div id="main-content">
        <div className="container-fluid"> 
        <div className="block-header">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>Analytical</h2>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-dashboard"></i></a></li>                            
                            <li className="breadcrumb-item">Dashboard</li>
                            <li className="breadcrumb-item active">Create Society</li>
                        </ul>
                    </div>
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2>Basic Validation</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        
            </div>
  )
}

export default CreateSociety