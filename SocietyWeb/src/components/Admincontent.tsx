import React from 'react'
import Navigationclose from './Navigationclose'
import SocietyMaster from '../pages/masters/Society/SocietyMaster'
import Societymaster from '../pages/masters/Society/societymaster'

const Admincontent = () => {
  return (
    <div id="main-content"> 
        <Navigationclose />
        <div className="container-fluid">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className='pageTitle'>Admin Management</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex flex-row-reverse">
                            <div className="page_action">
                                {/* <button type="button" className="btn btn-primary"><i className="fa fa-download"></i> Download report</button>
                                <button type="button" className="btn btn-secondary"><i className="fa fa-send"></i> Send report</button> */}
                            </div>
                            <div className="p-2 d-flex">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="header">
                            {/* <h2>Example Tab 2</h2> */}
                        </div>
                        <div className="body">
                            <ul className="nav nav-tabs-new">
                                <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#Home-new">Society Master</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Profile-new">Profile</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Contact-new">Contact</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="Home-new">
                                    <SocietyMaster />
                                </div>
                                <div className="tab-pane" id="Profile-new">
                                    <h6>Profile</h6>
                                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel </p>
                                </div>
                                <div className="tab-pane" id="Contact-new">
                                    <h6>Contact</h6>
                                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica</p>
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

export default Admincontent



