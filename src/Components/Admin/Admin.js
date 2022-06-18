import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { getAllCategories, deleteCategory, updateCategory, getCategoriesById } from "../../Service/categoryService";
import { getAllProducts, deleteProduct } from "../../Service/productService";
import ContentList from './ContentList';
import AddData from './AddData';
import './Admin.css'
function Admin() {
    const [result, setResult] = useState([]);
    const [title, setTitle] = useState('');
    const [isAddData, setIsAddData] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const adminSidebar = (input) => {
        setTitle(input);
        switch (input) {
            case 'Categories':
                setIsAddData(false);
                getAllCategories().then((res) => {
                    setResult(res);
                    console.log('dipanggil');
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
    const actionDelete = (id) => {
        switch (title) {
            case 'Categories':
                deleteCategory(id).then((res) => {
                    console.log(res);
                }).catch(error => console.log(error));
                setResult(result.filter(result => result.id !== id))
                break;
            case 'Products':
                deleteProduct(id);
                break;
            case 'Add Data':
                setIsAddData(true);
                break;
            default:
                break;
        }
        
    }

    const actionUpdate = (id) => {
        switch (title) {
            case 'Categories':
                getCategoriesById(id).then((res)=>{
                    setDataUpdate(res);
                })
                break;
            case 'Products':
                deleteProduct(id);
                break;
            case 'Add Data':
                setIsAddData(true);
                break;
            default:
                break;
        }
        
    }

    const alertAction = (data) => {
        return <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{data}</strong> You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    }
    useEffect(() => {
        adminSidebar(title);
    }, [])

    useEffect(() => {
                    
        if (dataUpdate) {
            setIsAddData(true)
        }
    }, [dataUpdate])
    

    useEffect(() => {
    }, [result])
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <Nav adminSidebar={adminSidebar} />
                    <div className="col py-3">
                        {isAddData ? <AddData data={dataUpdate} title={title}/> : <ContentList title={title} result={result} actionDelete={actionDelete} actionUpdate={actionUpdate} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin