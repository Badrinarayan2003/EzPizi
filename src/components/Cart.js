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
                        <h2 className="cart-head fw-bold text-center">Your Cart{getTotal().totalQuantity},{getTotal().totalPrice}</h2>
                    </div>
                </div>
                <div className="cart-heading border-bottom-dark">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-around">
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
                                            <p className="card-text qty"
                                                style={{ margin: '0 8px', }}
                                                onClick={() => dispatch(decrementQuantity(item.id))}
                                            >-</p>

                                            <p className="card-text para" style={{ margin: '0 8px' }}>{item.quantity}</p>

                                            <p className="card-text qty"
                                                style={{ margin: '0 8px' }}
                                                onClick={() => dispatch(incrementQuantity(item.id))}
                                            >+</p>
                                        </div>
                                        <p className="card-text para"><small className="text-muted">Rs {(item.price ? Number(item.price.replace('₹', '').replace(',', '')) : "") * (item.quantity)}</small></p>
                                        <p className="para cart-del" onClick={() => dispatch(removeItem(item.id))} ><i className="fa fa-solid fa-trash card-text"></i></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;