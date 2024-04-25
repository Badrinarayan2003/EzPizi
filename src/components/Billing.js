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
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4 pay-add-input">
                                <label for="validationCustom01" class="form-label">Name</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Full Name" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4 pay-add-input">
                                <label for="validationCustom02" class="form-label">Email</label>
                                <input type="email" class="form-control" id="validationCustom02" placeholder="Email" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4 pay-add-input">
                                <label for="validationCustom02" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="validationCustom02" placeholder="Phone" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-6 pay-add-input">
                                <label for="validationCustom03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="City" required />
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3 pay-add-input">
                                <label for="validationCustom04" class="form-label">State</label>
                                <select class="form-select " id="validationCustom04" required>
                                    <option selected value="">Odisha</option>
                                    <option>Hydrabad</option>
                                    <option>maharastra</option>
                                    <option>bihar</option>
                                    <option>delhi</option>
                                    <option>kolkata</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3 pay-add-input">
                                <label for="validationCustom05" class="form-label">Zip</label>
                                <input type="number" class="form-control" id="validationCustom05" required />
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input text-light bg-dark" type="checkbox" value="" id="invalidCheck" required />
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-dark fw-bold my-2" type="submit">Save</button>
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
                            <div class="input-group mb-2 pay-add-input">
                                <input type="text" class="form-control border" placeholder="Enter UPI" aria-label="Text input with segmented dropdown button" required />
                                <button type="button" class="btn border">Action</button>
                                <button type="button" class="btn border dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another</a></li>
                                    <li><a class="dropdown-item" href="#">Something</a></li>
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