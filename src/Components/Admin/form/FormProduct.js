import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../../Service/categoryService';
import { createProduct } from '../../../Service/productService';
const FormProduct = () => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: null,
        stock: null,
        category: null
    })
    const [success, setSuccess] = useState(false)
    const { name, price, stock, category } = formData
    const formSubmit = () => {
        console.log(1);
        createProduct(formData).then((res) => {
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
        getAllCategories().then((res) => {
            setCategories(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [formData])


    return (
        <div>
            <form onSubmit={() => formSubmit()}>
                <div className="form-group">
                    <label for="">Name</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={name} aria-describedby="helpId" placeholder="" />
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor='price'>Price</label>
                            <input type="number" className="form-control" name="price" id="price" onChange={handleChange} value={price} aria-describedby="helpId" placeholder="" />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor='price'>Stock</label>
                            <input type="number" className="form-control" name="stock" id="stock" onChange={handleChange} value={stock} aria-describedby="helpId" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor='price'>Category</label>
                    <select className="form-control" name="category" id="category">
                        {categories.map((category) => (
                            <option value={category.id}>{category.name}</option>
                        ))}
                    </select>
                    {/* <input type="number" className="form-control" name="category" id="category" onChange={handleChange} value={category} aria-describedby="helpId" placeholder="" /> */}
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

export default FormProduct