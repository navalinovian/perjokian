import React from 'react'

const OrderList = ({orders}) => {
    return (
        <div>
            {orders.map((order) => {
                const { id, name, price } = order;
                return (
                    <>
                        <div className="col" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card -title">{name}</h5>
                                    <p>Price :{price}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default OrderList