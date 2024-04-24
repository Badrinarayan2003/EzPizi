import { useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'


function Cart() {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += (item.price ? Number(item.price.replace('₹', '').replace(',', '')) : "") * item.quantity
        })
        return { totalPrice, totalQuantity }
    }

    return (
        <div className="cart-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="cart-head fw-bold">Cart</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="cart-heading">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-around cart-specifier-box">
                                    <p className="fw-bold" style={{ marginLeft: '1.5rem' }}>Product</p>
                                    <p className="fw-bold">Quantity</p>
                                    <p className="fw-bold">Price</p>
                                    <p className="fw-bold"></p>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" style={{ backgroundColor: 'rgb(235, 236, 236)' }}>
                            <div className="row">
                                {
                                    cart?.map((item) => {
                                        return (
                                            <div className="col-md-12 d-flex my-3 justify-content-around align-items-center cart-box" key={item.id}>
                                                <div className='text-center cart-img-title'>
                                                    <img src={item.photo} className="cart-img" alt={item.title} />
                                                    <p className="card-text cart-title fw-bold">{item.title.substring(0, 15)}...</p>
                                                </div>
                                                <div className="d-flex align-items-center qty-box">
                                                    <p className="card-text qty qty-indicator"
                                                        onClick={() => dispatch(decrementQuantity(item.id))}
                                                    >-</p>

                                                    <p className="card-text para" style={{ margin: '0 8px' }}>{item.quantity}</p>

                                                    <p className="card-text qty qty-indicator"
                                                        onClick={() => dispatch(incrementQuantity(item.id))}
                                                    >+</p>
                                                </div>
                                                <p className="card-text para" style={{ marginBottom: '0rem' }}><small className="text-muted">Rs. {(item.price ? Number(item.price.replace('₹', '').replace(',', '')) : "") * (item.quantity)}</small></p>
                                                <p className="para cart-del" style={{ marginBottom: '0rem' }} onClick={() => dispatch(removeItem(item.id))} ><i className="fa fa-solid fa-trash card-text"></i></p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="card checkout-card">
                            <div className="card-body" id="checkout-box">
                                <p className="text-center fw-bold checkout-heading">Price Details</p>
                                <div className="d-flex justify-content-between">
                                    <p className="fw-bold">Total Qty</p>
                                    <p className="fw-bold">{getTotal().totalQuantity}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="fw-bold">Total Price</p>
                                    <p className="fw-bold">Rs. {getTotal().totalPrice}</p>
                                </div>
                                <p className="text-center checkout-text">Taxes and shipping calculated at checkout</p>
                                <div className="checkout-btn-box">
                                    <a href="#" className="btn btn-dark rounded-pill fw-bold">Check Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-8" style={{ margin: '1rem 0' }}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: 'gainsboro' }}>
                                        Shipping Estimation
                                    </button>
                                </h2>

                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body cart-accordion">
                                        <form className="row g-3">
                                            <div className="col-md">
                                                <div className="form-floating estim-bg">
                                                    <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                                        <option defaultValue>Odisha</option>
                                                        <option value="1">Kolkata</option>
                                                        <option value="2">Delhi</option>
                                                        <option value="3">Bihar</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">State</label>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-floating mb-3 estim-bg">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="City" />
                                                    <label htmlFor="floatingInput">City</label>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-floating mb-3 estim-bg">
                                                    <input type="number" className="form-control" id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">Zip Code</label>
                                                </div>
                                            </div>
                                            <div className="col-md d-flex align-items-center">
                                                <div className="d-flex flex-column">
                                                    <button type="submit" className="btn btn-dark rounded-pill" id="estimate-btn">Estimate</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Cart;