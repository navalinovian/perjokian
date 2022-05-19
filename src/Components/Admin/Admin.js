import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { getAllCategories, createCategories } from "../../Service/categoryService";
import { getAllProducts } from "../../Service/productService";
import ContentList from './ContentList';
import AddData from './AddData';
function Admin() {

    const [result, setResult] = useState([]);
    const [title, setTitle] = useState('');
    const [isAddData, setIsAddData] = useState(false);
    const adminSidebar = (input) => {
        setTitle(input);
        switch (input) {
            case 'Categories':
                setIsAddData(false);
                getAllCategories().then((res) => {
                    setResult(res);
                }).catch((err) => {
                    console.log(err);
                })
                break;
            case 'Products':
                setIsAddData(false);
                getAllProducts().then((res) => {
                    setResult(res);
                }).catch((err) => {
                    console.log(err);
                })
                break;
            case 'Add Data':
                setIsAddData(true);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
    }, [result])
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <Nav adminSidebar={adminSidebar} />
                    <div className="col py-3">
                        {isAddData?<AddData/>:<ContentList title={title} result={result} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin