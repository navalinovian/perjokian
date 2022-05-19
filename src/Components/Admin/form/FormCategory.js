import React, { useEffect, useState } from 'react'
import { createCategories } from '../../../Service/categoryService';
const FormCategory = () => {
    const [formData, setFormData] = useState({
        name:''
    })
    const [success, setSuccess] = useState(false)
    const { name } = formData
    const formSubmit = () => {
        console.log(1);
        createCategories(formData).then((res) => {
            setSuccess(true);
        })
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }
    useEffect(() => {
      
    }, [formData])
    
    
    return (
        <div>
            <form onSubmit={()=>formSubmit()}>
                <div className="form-group">
                    <label for="">Name</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={name} aria-describedby="helpId" placeholder="" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                
                
            </form>
            {success?<div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>:null}
        </div>
    )
}

export default FormCategory