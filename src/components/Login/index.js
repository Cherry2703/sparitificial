import { useState } from "react"

import {  useNavigate } from "react-router-dom"

import "./index.css"

const Login=()=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [showErrorMsg,setShowErrorMsg]=useState(false)
    // const [errMsg,setErrMsg]=useState('')
    const navigate=useNavigate()


    const onClickLogin=()=>{
        navigate('/')
        // if(email==='' & password===''){
        //     setShowErrorMsg(true)
        //     setErrMsg('Please enter email and password')
        // }
        // else if(email===''){
        //     setShowErrorMsg(true)
        //     setErrMsg('Please enter email')
        // }
        // else if(email===''){
        //     setShowErrorMsg(true)
        //     setErrMsg('Please enter password')
        // }else{
        //     showErrorMsg(false)
        //     navigate('/')
        // }
    }

    return(
        <div className="login-form-container">
            <form className="form-container">
                <div>
                    <h2>Spartificial</h2>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} placeholder="Enter Email" id="email" className="email-input-field" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Email</label>
                        <input type="password" value={password} placeholder="Enter Password" id="password" className="password-input-field" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button className="login-button" onClick={onClickLogin}>Login</button>
                    </div>
                    {/* {showErrorMsg &&<p className="error-message">{errMsg}</p>} */}
                </div>
            </form>
        </div>
    )
}

export default Login