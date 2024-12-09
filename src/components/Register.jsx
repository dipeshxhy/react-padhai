import React, { useState } from 'react'
import CommonForm from './common-form'
import { registerFormControls } from '@/config'
const registerFormData={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
}
const Register = () => {
     const [registerData, setRegisterData] = useState(registerFormData)

     const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(registerData)
        setRegisterData(registerFormData)
     }
  return (
    <div>Register

        <CommonForm
        formControls={registerFormControls}
        formData={registerData}
        setFormData={setRegisterData}
        buttonTxt={"Register"}
        handleSubmit={handleSubmit}
        />
    </div>
  )
}

export default Register