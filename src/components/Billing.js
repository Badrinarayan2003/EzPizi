import { useSelector } from "react-redux";
import AddressForm from "./AddressForm";
import AddressSaved from "./AddressSaved";

function Billing() {

    const cart = useSelector((state) => state.cartData.cart)
    const address = useSelector((state) => state.addData.addresses)

    const getTotal = () => {
        let totalQuantity = 0
        let totalAmount = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalAmount += (item.price ? Number(item.price.replace('₹', '').replace(',', '')) : "") * item.quantity
        });
        return { totalQuantity, totalAmount }
    }

    return (
        <div className="billing-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-4 payment-detail-box">
                        <h3 className="fw-bold text-center payment-heading">Delivery Address</h3>
                        {address[0] && <AddressSaved />}
                        {address[0] ? "" : <AddressForm />}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5 payment-detail-box my-4">
                        <h3 className="fw-bold text-center payment-heading">Your Order</h3>
                        <div className="payment-sub-total">
                            <div className="d-flex justify-content-between">
                                <p>Items</p>
                                <p>{getTotal().totalQuantity}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Price</p>
                                <p>Rs. {getTotal().totalAmount}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Shipping Charges</p>
                                <p>Rs. 0</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between payment-grand-total">
                            <p className="fw-bold">Total</p>
                            <p className="fw-bold">Rs. {getTotal().totalAmount}</p>
                        </div>
                        <div className="payment-option-box my-2">
                            <div className="form-check payment-option-one ">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Cash on Delivery
                                </label>
                            </div>
                            <div className="form-check payment-option-two">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Pay Now
                                </label>
                            </div>
                        </div>
                        <div className="pay-button my-4">
                            <a href="/" className="btn btn-dark fw-bold">Place Order</a>
                        </div>
                    </div>
                    <div className="col-md-7"></div>
                </div>

            </div>
        </div>
    );
}

export default Billing;