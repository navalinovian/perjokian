import React, { useEffect, useState } from 'react'
import FormCategory from './form/FormCategory'

const AddData = ({ title, result }) => {
    const [selection, setSelection] = useState(null);
    const onSelect=(selection)=>{
        switch (selection) {
            case 'Categories':
                return <FormCategory/>
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
                        <label for="selection">Select Table</label>
                        <select className="custom-select" name="tableSelection" id="tableSelection" onChange={(e)=>{setSelection(e.target.value)}}>
                            <option defaultValue={null}>Select one</option>
                            <option value="Categories">Categories</option>
                            <option value="Products">Products</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='row'>
                {onSelect(selection)}
            </div>
        </div>
    )
}

export default AddData