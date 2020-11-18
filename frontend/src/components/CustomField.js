import React from "react";
import { Field,useField } from 'react-final-form';

const CustomField =  ({ name, label, inputType, placeholder }) => {
    return (
        <Field
            name={name}
            render={({ input, meta }) => (
                <div className="form-group">
                    <label>{label}</label>
                    {inputType==='textarea'? 
                     (<textarea placeholder={placeholder} {...input} u className="form-control" rows="3"></textarea>):
                     (<input placeholder={placeholder} {...input}  className="form-control"  />)
                    } 
                    {meta.touched && meta.error && <small  className="form-text text-danger">{meta.error}</small>}
                </div>
            )}
        />
    )
}
  
export default CustomField;