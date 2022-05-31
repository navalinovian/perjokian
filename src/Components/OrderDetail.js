import React from 'react'
import { useLocation } from 'react-router-dom';
import OrderList from './OrderList';
import PaymentSummary from './PaymentSummary';

const OrderDetail = () => {
    const { state } = useLocation();
    return (
        <div>
            OrderDetail
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-8'>
                        <OrderList orders={state}/>
                    </div>
                    <div className='col'>
                        <PaymentSummary/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail