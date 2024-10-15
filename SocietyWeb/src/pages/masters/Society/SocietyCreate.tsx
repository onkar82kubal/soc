import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import axiosInstance from '../../../interceptor/axiosInstance';

const SocietyCreate = () => {
    const [isTrial, setIsTrial] = useState("Y");
    const [isActive, setIsActive] = useState("Y");
    const [data,setData] = useState({
        society_name:'',
        address:'',
        pincode:'',
        email:'',
        contact:'',
        istrial:'',
        isactive:'',
      }) 
    
      const createSociety = async(e:any) => {
        e.preventDefault()
        const { society_name, address, pincode, email,contact } = data
        try {
            console.log(society_name);
          const { data } = await axiosInstance.post('/society',{
            society_name:society_name,
            address:address,
            pincode:pincode,
            email:email,
            contact:contact,
            istrial:isTrial,
            isactive:isActive
          })
          if(data.error){
            toast.error(data.error)
          } else {
            console.log(data);
            setData({})
          }
        } catch(error:any) {
          toast.error(error)
        }
      }  
  return (
    <>
    <div className="card">
          <div className="header">
              <h2>Create Society</h2>
          </div>
          <div className="body">
              <form id="basic-form"   onSubmit={createSociety}>
                  <div className="form-group">
                      <label>Society Name</label>
                      <input name="society_name" type="text" className="form-control" value={data.society_name} onChange={(e) => setData({...data,society_name:e.target.value})} required />
                  </div>
                  <div className="form-group">
                      <label>Address</label>
                      <textarea name="address" class="form-control" rows="5" cols="30" value={data.address} onChange={(e) => setData({...data,address:e.target.value})} required></textarea>
                  </div>
                  <div className="form-group">
                      <label>Pin code</label>
                      <input name="pincode" type="text" className="form-control" value={data.pincode} onChange={(e) => setData({...data,pincode:e.target.value})} required />
                  </div>
                  <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" className="form-control" value={data.email} onChange={(e) => setData({...data,email:e.target.value})} required />
                  </div>
                  <div className="form-group">
                      <label>Contact</label>
                      <input name="contact" type="text" className="form-control" value={data.contact} onChange={(e) => setData({...data,contact:e.target.value})} required />
                  </div>
                  <div className="form-group">
                      <label>Trial</label>
                      <br />
                      <label className="fancy-radio">
                          <input type="radio" 
                          value={isTrial}
                          name="istrial"
                          onClick={() => {
                            setIsTrial("Y");
                          }}
                          checked={isTrial == "Y"}
                          required data-parsley-errors-container="#error-radio"/>
                          <span><i></i>Yes</span>
                      </label>
                      <label className="fancy-radio">
                          <input type="radio"
                          value={isTrial}
                          name="istrial"
                           onClick={() => {
                            setIsTrial("N");
                          }}
                          checked={isTrial == "N"}
                           />
                          <span><i></i>No</span>
                      </label>
                      <p id="error-radio"></p>
                  </div>
                  <div className="form-group">
                    <label>Is Active</label>
                    <br />
                    <label className="fancy-radio">
                        <input type="radio" 
                        value={isActive}
                        name="isactive"
                        onClick={() => {
                            setIsActive("Y");
                        }}
                        checked={isActive == "Y"}
                        required data-parsley-errors-container="#error-radio"/>
                        <span><i></i>Yes</span>
                    </label>
                    <label className="fancy-radio">
                        <input type="radio"
                        value={isActive}
                        name="isactive"
                        onClick={() => {
                            setIsActive("N");
                        }}
                        checked={isActive == "N"}
                        />
                        <span><i></i>No</span>
                    </label>
                    <p id="error-radio"></p>
                    </div>
                
                  <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                  <button type="submit" className="btn btn-primary">Save</button>
                  </div>
              </form>
          </div>
    </div>
    </>
  )
}

export default SocietyCreate