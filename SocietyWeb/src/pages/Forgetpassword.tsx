import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Copyright from '../components/Copyright'
import LoginrightPanel from '../components/LoginrightPanel'




const Forgetpassword = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    email:'',
  })
  const forgetpassword = async(e:any) => {
    e.preventDefault()
    const { email } = data
    try {
      const { data } = await axios.post('/outh/forgetpassword',{
        email:email
      })
      if(data.error){
        toast.error(data.error)
      } else {
        setData({})
        navigate('/')
      }
    } catch(error:any) {
      toast.error(error)
    }
  }

  return (
    <div id="wrapper" className="theme-cyan">
		<div className="vertical-align-wrap">
			<div className="vertical-align-middle auth-main">
				<div className="auth-box">
          <Logo />
          <div className="card">
            <div className="header">
                <p className="lead">Recover my password</p>
            </div>
            <div className="body">
              <p>Please enter your email address below to receive instructions for resetting password.</p>
              <form className="form-auth-small" onSubmit={forgetpassword}>
                  <div className="form-group">
                      <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                      <input type="email" className="form-control" id="signin-email"  placeholder="Email" value={data.email} onChange={(e) => setData({...data,email:e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-block">RESET PASSWORD</button>
                  <div className="bottom">
                      <span className="helper-text">Know your password? <a href="login">Login</a></span>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <Copyright />
			</div>
      <LoginrightPanel />
		</div>
	</div>
    
  )
}

export default Forgetpassword