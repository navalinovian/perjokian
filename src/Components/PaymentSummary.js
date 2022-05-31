import React from 'react'

const PaymentSummary = ({paymentSum}) => {
    const handleSubmit=()=>{
        console.log('hello');
    }

    return (
        <div className="card">
            <h5 className="card-header">Payment Summary</h5>
            <div className="card-body">
                <hr className="dotted" style={{ borderTop: "4px dotted #bbb" }} />
                <p className="card-text">Order Summary: Rp.</p>
                <p className="card-text">Additional Service: Rp.</p>
                <p className="card-text">Total: Rp.</p>
                <hr className="dotted" style={{ borderTop: "4px dotted #bbb" }} />

                <form onSubmit={()=> handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="">Select Payment</label>
                      <select className="form-control" name="selectPayment" id="selectPayment">
                        <option>Mandiri</option>
                        <option>BCA</option>
                        <option>Link Aja</option>
                      </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Action</button>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default PaymentSummary