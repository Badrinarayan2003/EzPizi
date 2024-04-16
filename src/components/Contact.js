import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    })
    const [visible, setVisible] = useState(false)


    const handleChange = (evt) => {
        const newName = evt.target.name
        const newVal = evt.target.value
        setFormData((prev) => {
            return { ...prev, [newName]: newVal }
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formData)

        window.Email.send({
            SecureToken: "77a3e194-71dc-481a-990b-1f6eb7759b76",
            To: 'badrinarayan295@gmail.com',
            From: "badrinarayan295@gmail.com",
            Subject: "Client Enquiry",
            Body: `Name: ${formData.fullName} Email: ${formData.email} Subject: ${formData.message}`
        }).then(
            () => {
                setVisible(true)
            }
        );

        setFormData({
            fullName: "",
            email: "",
            message: ""
        })

        setTimeout(() => {
            setVisible(false)
        }, 5000)

    }

    return (
        <div className="contact-section">
            <div className="container ">
                <div className="card contact-card">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <h5 className="contact-heading fw-bold">Contact Us</h5>
                            <h2 className="fw-bold">Do you have any question?</h2>
                        </div>
                        <div className="col-md-7">
                            {visible ? (<p className="text-center fw-bold">Send Successfully</p>) : ""}
                            <div className="card-body contact-card-body" id="cotact-content-box" >
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating contact-input-box">
                                            <input type="text" className="form-control bg-transparent" id="floatingInputGrid" placeholder="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                                            <label htmlFor="floatingInputGrid bg-transparent ">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating contact-input-box">
                                            <input type="email" className="form-control bg-transparent" id="floatingInputGrid" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} />
                                            <label htmlFor="floatingInputGrid bg-transparent ">Email</label>
                                        </div>
                                    </div>
                                    <div className="form-floating contact-input-box">
                                        <textarea className="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} name="message" value={formData.message} onChange={handleChange}></textarea>
                                        <label htmlFor="floatingTextarea2 bg-transparent">Message</label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-dark border rounded-pill my-2" onClick={handleSubmit}>Send</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Contact;