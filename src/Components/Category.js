import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const Category = () => {
    const [data, setData] = useState(Categories);
    const [cart, setCart] = useState([]);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }
    const handleAddCart = (item) => {
        const index = cart.findIndex(element => element.id === item.id)//cek sudah ada item belum
        if (index != -1) {
            let hardCopy = [...cart]
            let selectedItem = cart[index]
            hardCopy = hardCopy.filter((element) => element.id !== item.id);
            selectedItem.amount = selectedItem.amount += 1
            hardCopy.push(selectedItem)
            setCart(hardCopy)
        } else {
            item.amount = 1
            setCart([...cart, item])
        }
    }


    // useEffect(() => {
    //     console.log(cart);
    // });

    return (
        <>
            <h1 className="text-center text-info">Let's Shop!</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Pria')}>Pria</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Wanita')}>Wanita</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Anak-anak')}>Anak-anak</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Sepatu')}>Sepatu</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Tas')}>Tas</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => setData(Categories)}>ALL</button>
                        <button className="btn btn-primary w-100 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Cart {cart.length}</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            {cart.map((values) => {
                                                const { id, tittle, price, amount } = values;
                                                return (
                                                    <>
                                                        <div className="col" key={id}>
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card -title">{tittle}</h5>
                                                                    <p>Price :{price}</p>
                                                                    <p>Amount :{amount}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                            <h5>Total: </h5>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {data.map((values) => {
                                const { id, tittle, price, image } = values;
                                return (
                                    <>
                                        <div className="col-md-4 mb-4" key={id}>
                                            <div class="card">
                                                <img src={image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card -title">{tittle}</h5>
                                                    <p>Price :{price}</p>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <button class="btn btn-dark">Buy Now</button>
                                                    <button class="btn btn-dark" onClick={() => handleAddCart(values)} style={{ marginLeft: '10px' }}>Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;
