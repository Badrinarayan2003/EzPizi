import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addAddress } from '../redux/addressSlice'
function AddressForm() {
    const [deliveryAdd, setDeliveryAdd] = useState({
        Name: "",
        Email: "",
        Phone: "",
        City: "",
        State: "",
        Zip_Code: ""
    })
    const dispatch = useDispatch()

    const handleChange = (evt) => {
        const newName = evt.target.name
        const newValue = evt.target.value
        setDeliveryAdd((pre) => {
            return { ...pre, [newName]: newValue }
        })
    }
    const handleClick = (evt) => {
        evt.preventDefault()
        dispatch(addAddress({
            Name: deliveryAdd.Name,
            Email: deliveryAdd.Email,
            Phone: deliveryAdd.Phone,
            City: deliveryAdd.City,
            State: deliveryAdd.State,
            Zip_Code: deliveryAdd.Zip_Code
        }))
        setDeliveryAdd({
            Name: "",
            Email: "",
            Phone: "",
            City: "",
            State: "",
            Zip_Code: ""
        })
    }

    const isEmpty = () => {
        return (
            deliveryAdd.Name.length === 0,
            deliveryAdd.Email.length === 0,
            deliveryAdd.Phone.length === 0,
            deliveryAdd.City.length === 0,
            deliveryAdd.State.length === 0,
            deliveryAdd.Zip_Code.length === 0
        )
    }
    return (
        <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4 pay-add-input">
                <label htmlFor="validationCustom01" className="form-label">Name</label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="Full Name" name="Name" value={deliveryAdd.Name} onChange={handleChange} required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-4 pay-add-input">
                <label htmlFor="validationCustom02" className="form-label">Email</label>
                <input type="email" className="form-control" id="validationCustom02" placeholder="Email" name="Email" value={deliveryAdd.Email} onChange={handleChange} required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-4 pay-add-input">
                <label htmlFor="validationCustom02" className="form-label">Phone</label>
                <input type="number" className="form-control" id="validationCustom02" placeholder="Phone" name="Phone" value={deliveryAdd.Phone} onChange={handleChange} required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6 pay-add-input">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <input type="text" className="form-control" id="validationCustom03" placeholder="City" name="City" value={deliveryAdd.City} onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-3 pay-add-input">
                <label htmlFor="validationCustom04" className="form-label">State</label>
                <select className="form-select " id="validationCustom04" name="State" value={deliveryAdd.State} onChange={handleChange} required>
                    <option>Choose</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Hydrabad">Hydrabad</option>
                    <option value="maharastra">maharastra</option>
                    <option value="bihar">bihar</option>
                    <option value="delhi">delhi</option>
                    <option value="kolkata">kolkata</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div className="col-md-3 pay-add-input">
                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                <input type="number" className="form-control" id="validationCustom05" name="Zip_Code" value={deliveryAdd.Zip_Code} onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input text-light bg-dark" type="checkbox" value="" defaultChecked id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-dark fw-bold my-2" type="submit" onClick={handleClick} disabled={isEmpty()}>Save</button>
            </div>
        </form>
    )
}

export default AddressForm;