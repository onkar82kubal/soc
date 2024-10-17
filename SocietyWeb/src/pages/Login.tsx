import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Copyright from '../components/Copyright'
import LoginrightPanel from '../components/LoginrightPanel'
import axiosInstance from '../interceptor/axiosInstance';

const Login = () => {
  localStorage.clear();
  const navigate = useNavigate()
  const [data,setData] = useState({
    email:'',
    password:''
  }) 

  const loginUser = async(e:any) => {
    e.preventDefault()
    const { email,password } = data
    try {
      const { data } = await axiosInstance.post('/outh',{
        email:email,
        password:password
      })
      if(data.error){
        toast.error(data.error)
      } else {
        console.log(data);
        setData({})
        localStorage.setItem('ACCESS_TOKEN',data.result.accessToken);
        localStorage.setItem('REFRESH_TOKEN',data.result.refreshToken);
        navigate('/dashboard')
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
                <p className="lead">Login to your account</p>
            </div>
            <div className="body">
              <form className="form-auth-small"  onSubmit={loginUser}>
                <div className="form-group">
                    <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                    <input type="email" className="form-control" id="signin-email"  placeholder="Email" value={data.email} onChange={(e) => setData({...data,email:e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="signin-password" className="control-label sr-only">Password</label>
                    <input type="password" className="form-control" id="signin-password" value={data.password} onChange={(e) => setData({...data,password:e.target.value})} placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">LOGIN</button>
                <div className="bottom">
                    <span className="helper-text m-b-10">
                    <a href="forgot-password">Forgot password?</a></span>
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

export default Login