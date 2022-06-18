import React, { useEffect, useState } from 'react'
import { createCategory, updateCategory } from '../../../Service/categoryService';
const FormCategory = ({data}) => {
    const [formData, setFormData] = useState({
        id:null,
        name: null
    })
    const [success, setSuccess] = useState(false)
    const { name,id } = formData
    const formSubmit = event => {
        event.preventDefault();
        console.log(1);
        createCategory(formData).then((res) => {
            if (!res.error) {
                setSuccess(true)
                setFormData({ name: '', id:'' })
            }
        })
    }

    const formUpdate = event => {
        event.preventDefault();
        updateCategory(formData).then((res) => {
            if (!res.error) {
                setSuccess(true)
                setFormData({ name: '', id:'' })
            }
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
        const timeId = setTimeout(() => {
            setSuccess(false);
        }, 5000)

        return () => {
            clearTimeout(timeId)
          }
    }, [formData])

    useEffect(() => {
        if (data) {
            setFormData({
                id:data.id,
                name:data.name
            })
        }
    }, [])


    return (
        <div>
            <form onSubmit={data? formUpdate :formSubmit}>
                <div className="form-group">
                    <label htmlFor='Id'>Id</label>
                    <input type="number" className="form-control" name="id" id="id" onChange={handleChange} value={id} aria-describedby="helpId" placeholder="" disabled={data?true:false}/>
                </div>
                <div className="form-group">
                    <label htmlFor='Name'>Name</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={name} aria-describedby="helpId" placeholder="" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>


            </form>
            {success ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : null}
        </div>
    )
}

export default FormCategory