import React from 'react'

const CommonInput = ({name,type,label,placeholder,value,onChange}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type={type || "text"} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default CommonInput