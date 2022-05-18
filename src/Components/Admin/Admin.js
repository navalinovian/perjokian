import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { getAllCategories, createCategories } from "../../Service/categoryService";
import { getAllProducts } from "../../Service/productService";
function Admin() {

    const [result, setResult] = useState([]);
    const [title, setTitle] = useState('');
    const adminSidebar = (input) => {
        setTitle(input);
        switch (input) {
            case 'categories':
                getAllCategories().then((res) => {
                    setResult(res);
                }).catch((err) => {
                    console.log(err);
                })
                break;
            case 'product':
                getAllProducts().then((res) => {
                    setResult(res);
                }).catch((err) => {
                    console.log(err);
                })
                break;
            default:
                break;
        }
    }
    const renderRow = (props) => {
        return props.keys.map((key, index) => {
            return <td key={props.data[key]}>{props.data[key]}</td>
        })
    }
    useEffect(() => {
        console.log(result);
        console.log();
    }, [result])
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <Nav adminSidebar={adminSidebar} />
                    <div className="col py-3">
                        {title?<h3>{title}</h3>:<h3>Dashboard</h3>}
                        <p className="lead">
                            An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
                            menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                        <ul className="list-unstyled">
                            <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
                        </ul>
                        {result.length !== 0 ? (
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((value) => {
                                        const { id, name } = value
                                        return <tr>

                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td><button type="button" class="btn btn-primary"></button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        ) : ""}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin