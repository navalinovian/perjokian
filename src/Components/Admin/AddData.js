import React, { useEffect, useState } from 'react'
import FormCategory from './form/FormCategory'
import FormProduct from './form/FormProduct';

const AddData = ({ title, result }) => {
    const [selection, setSelection] = useState(null);
    const onSelect=(selection)=>{
        switch (selection) {
            case 'Categories':
                return <FormCategory/>
            case 'Products':
                return <FormProduct/>
            default:
                break;
        }
    }

    useEffect(() => {
      
    }, [selection])
    
    return (
        <div>
            <div className='row'>
                <div className='col-4'>
                    <div className="form-group">
                        <label for="selection">
                            <h2>Select Table</h2> 
                            </label>
                        <select className="custom-select" name="tableSelection" id="tableSelection" onChange={(e)=>{setSelection(e.target.value)}}>
                            <option defaultValue={null}>Select one</option>
                            <option value="Categories">Categories</option>
                            <option value="Products">Products</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
            </div> 
            <hr className="dotted" style={{ borderTop: "4px dotted #bbb" }} />
            <div className='row'>
                {onSelect(selection)}
            </div>
        </div>
    )
}

export default AddData