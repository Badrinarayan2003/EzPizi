import { useSelector, useDispatch } from "react-redux";
import { deleteAddress } from '../redux/addressSlice'

function AddressSaved() {
    const address = useSelector((state) => state.addData.addresses)
    console.log(address);
    const dispatch = useDispatch()

    return (
        <div className="address-save-section">

            {
                address.map((item, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col-md-6 mb-3" >
                                <div className="saved-address-box">
                                    <div className="d-flex justify-content-end">
                                        <p className="selected-address mb-0">saved</p>
                                    </div>
                                    <p className="fw-bold mb-0">Name: <span className="fw-normal">{item.Name}</span> </p>
                                    <p className="fw-bold mb-0">Email: <span className="fw-normal">{item.Email}</span> </p>
                                    <p className="fw-bold mb-0">Phone: <span className="fw-normal">{item.Phone}</span> </p>
                                    <p className="fw-bold mb-0">State: <span className="fw-normal">{item.State}</span> </p>
                                    <p className="fw-bold mb-0">Zip-Code: <span className="fw-normal">{item.Zip_Code}</span> </p>
                                    <p className="fw-bold mb-0">City: <span className="fw-normal">{item.City}</span> </p>
                                    <div className="d-flex justify-content-end">
                                        <p className="save-add-remove fw-bold mb-0 me-3"
                                            onClick={() => dispatch(deleteAddress(index))}
                                        ><i class="fa fa-solid fa-trash"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default AddressSaved;