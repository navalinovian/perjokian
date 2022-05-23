import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { getAllCategories, createCategories } from "../Service/categoryService";
import { getAllProducts } from "../Service/productService";
const Category = () => {
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState([]);
    const [display, setDisplay] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const filterResult = async (catItem) => {
        await setDisplay(product);
        const result = await display.filter((curData) => {
            return curData.category_id === catItem;
        });
        await setProduct(result);
    }
    const handleAddCart = async (item) => {
        const index = cart.findIndex(element => element.id === item.id)//cek sudah ada item belum
        if (index !== -1) {
            let hardCopy = await [...cart]
            let selectedItem = await cart[index]
            hardCopy = await hardCopy.filter((element) => element.id !== item.id);
            selectedItem.amount = selectedItem.amount += 1
            await hardCopy.push(selectedItem)
            await setCart(hardCopy)
        } else {
            item.amount = 1
            await setCart([...cart, item])
        }
        const total = await Object.values(cart).reduce((total, value) => total + (value.price * value.amount), 0)
        await setTotalCart(total)
    }


    useEffect(() => {
        getAllCategories().then((res) => {
            setCategories(res);
        }).catch((err) => {
            console.log(err);
        })
        getAllProducts().then((res) => {
            setProduct(res);
            setDisplay(res);
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    useEffect(() => {
    }, [categories, product])


    return (
        <>
            <h1 className="text-center text-info">Let's Shop!</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        {categories.map((values) => {
                            const { id, name } = values;
                            return (
                                <>
                                    <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult(id)} >{name}</button>
                                </>
                            )
                        })}

                        {/* <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Wanita')}>Wanita</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Anak-anak')}>Anak-anak</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Sepatu')}>Sepatu</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Tas')}>Tas</button> */}
                        {/* <button className="btn btn-warning w-100 mb-4" onClick={() => setData(Categories)}>ALL</button> */}
                        <button className="btn btn-primary w-100 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Cart {cart.length}</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {cart.map((values) => {
                                                const { id, name, price, amount } = values;
                                                return (
                                                    <>
                                                        <div className="col" key={id}>
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <h5 className="card -title">{name}</h5>
                                                                    <p>Price :{price}</p>
                                                                    <p>Amount :{amount}</p>
                                                                    <p>Subtotal :{price*amount}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                            <h5>Total: {totalCart}</h5>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {display.map((values) => {
                                const { id, name, price } = values;
                                return (
                                    <>
                                        <div className="col-md-4 mb-4" key={id}>
                                            <div className="card">
                                                <img src='../images/sageshirt.jpg' className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card -title">{name}</h5>
                                                    <p>Price :{price}</p>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <button className="btn btn-dark">Buy Now</button>
                                                    <button className="btn btn-dark" onClick={() => handleAddCart(values)} style={{ marginLeft: '10px' }}>Add to Cart</button>
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
