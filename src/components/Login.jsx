import React, { useState } from 'react'
import CommonForm from './common-form'
import { loginFormControls } from '@/config'

const loginData={
    email:"",
    password:""
}
const Login = () => {
    const [loginFormData, setLoginFormData] = useState(loginData)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(loginFormData)
        setLoginFormData(loginData)
    }
  return (
    <div>Login

        <CommonForm
        formControls={loginFormControls}
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleSubmit={handleSubmit}
        buttonTxt={"Login"}
        />
    </div>
  )
}

export default Login