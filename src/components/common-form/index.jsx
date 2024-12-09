import React from 'react'
import CommonInput from '../common-input'
import { Button } from '../ui/button'


const formTypes={
    INPUT:"input"
}
const CommonForm = ({formControls=[],formData,setFormData,buttonTxt,handleSubmit}) => {

    const renderForm=(getCurrentFormElem)=>{
        let content=null
        switch (getCurrentFormElem.componentType) {
            case formTypes.INPUT:
               content=<CommonInput
               name={getCurrentFormElem.name}
               label={getCurrentFormElem.label}
               type={getCurrentFormElem.formTypes}
               placeholder={getCurrentFormElem.placeholder}
               value={formData[getCurrentFormElem.name]}
               onChange={(e)=>setFormData({
                ...formData,
                [e.target.name]:e.target.value
               })}
               /> 
        
            default:
                content=<CommonInput
                name={getCurrentFormElem.name}
                label={getCurrentFormElem.label}
                type={getCurrentFormElem.type}
                placeholder={getCurrentFormElem.placeholder}
                value={formData[getCurrentFormElem.name]}
                onChange={(e)=>setFormData({
                 ...formData,
                 [e.target.name]:e.target.value
                })}
                /> 
        }
        return content
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
{
    formControls.length>0?
    formControls.map(singleFormElem=>renderForm(singleFormElem)):null
}
<div>
    <Button type="submit">{buttonTxt || "Submit"} </Button>
</div>
        </form>
    </div>
  )
}

export default CommonForm