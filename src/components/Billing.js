import { useSelector } from "react-redux";


function Billing() {

    const cart = useSelector((state) => state.cart)

    const getTotal = () => {
        let totalQuantity = 0
        let totalAmount = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalAmount += (item.price ? Number(item.price.replace('₹', '').replace(',', '')) : "")*item.quantity
        });
        return{totalQuantity,totalAmount}
    }

    return (
        <div className="billing-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-4 payment-detail-box">
                        <h3 className="fw-bold text-center payment-heading">Delivery Address</h3>
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-4 pay-add-input">
                                <label for="validationCustom01" className="form-label">Name</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Full Name" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 pay-add-input">
                                <label for="validationCustom02" className="form-label">Email</label>
                                <input type="email" className="form-control" id="validationCustom02" placeholder="Email" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 pay-add-input">
                                <label for="validationCustom02" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="validationCustom02" placeholder="Phone" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-6 pay-add-input">
                                <label for="validationCustom03" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3 pay-add-input">
                                <label for="validationCustom04" className="form-label">State</label>
                                <select className="form-select " id="validationCustom04" required>
                                    <option selected value="">Odisha</option>
                                    <option>Hydrabad</option>
                                    <option>maharastra</option>
                                    <option>bihar</option>
                                    <option>delhi</option>
                                    <option>kolkata</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 pay-add-input">
                                <label for="validationCustom05" className="form-label">Zip</label>
                                <input type="number" className="form-control" id="validationCustom05" required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input text-light bg-dark" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-dark fw-bold my-2" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-7"></div>
                    <div className="col-md-5 payment-detail-box my-4">
                        <h3 className="fw-bold text-center payment-heading">Payment Details</h3>
                        <div className="payment-sub-total">
                            <div className="d-flex justify-content-between">
                                <p>Items</p>
                                <p>{getTotal().totalQuantity}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Total</p>
                                <p>Rs. {getTotal().totalAmount}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Shipping Charges</p>
                                <p>Rs. 0</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between payment-grand-total">
                            <p className="fw-bold">Grand Total</p>
                            <p className="fw-bold">Rs. {getTotal().totalAmount}</p>
                        </div>
                        <p className="fw-bold text-center">Pay Using UPI</p>
                        <div className="payment-option-box">
                            <div className="input-group mb-2 pay-add-input">
                                <input type="text" className="form-control border" placeholder="Enter UPI" aria-label="Text input with segmented dropdown button" required />
                                <button type="button" className="btn border">Action</button>
                                <button type="button" className="btn border dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another</a></li>
                                    <li><a className="dropdown-item" href="#">Something</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pay-button my-4">
                            <a href="/" className="btn btn-dark fw-bold">Pay Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Billing;