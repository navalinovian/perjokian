import React from 'react'

const ContentList = ({ title, result, actionDelete, actionUpdate }) => {

    return (
        <div>
            {title ? <h3>{title}</h3> : <h3>Dashboard</h3>}
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
                            return <tr key={id}>

                                <td>{id}</td>
                                <td>{name}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" onClick={() => { actionUpdate(id)}}>Update</button>
                                    <span className='m-2' />
                                    <button type="button" class="btn btn-danger" onClick={() => { actionDelete(id)}}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            ) : ""}
        </div>
    )
}

export default ContentList