import React from 'react'

const Nav = ({ adminSidebar }) => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className='row'>
                <div className="d-flex justify-content-center flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="d-flex justify-content-center">Menu</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item x-grid">
                            <button type="button" onClick={() => { adminSidebar('Add Data') }} class="btn btn-primary">Add Data</button>
                        </li>
                        <li>
                            <a href="/#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="/#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                                </li>
                                <li>
                                    <a href="/#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/" onClick={() => { adminSidebar('Categories') }} className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Categories</span></a>
                        </li>
                        <li>
                            <a href="/#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="/#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                                </li>
                                <li>
                                    <a href="/#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/" onClick={() => { adminSidebar('Products') }} className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                        </li>
                        <li>
                            <a href="/#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="!#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                            <span className="d-none d-sm-inline mx-1">loser</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="/#">New project...</a></li>
                            <li><a className="dropdown-item" href="/#">Settings</a></li>
                            <li><a className="dropdown-item" href="/#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav