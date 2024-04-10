function Contact() {


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
                            <div className="card-body contact-card-body" style={{ padding: '4rem 2rem' }}>
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating contact-input-box">
                                            <input type="text" className="form-control bg-transparent" id="floatingInputGrid" placeholder="Full Name" value="name" />
                                            <label htmlFor="floatingInputGrid bg-transparent ">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating contact-input-box">
                                            <input type="email" className="form-control bg-transparent" id="floatingInputGrid" placeholder="name@example.com" value="email" />
                                            <label htmlFor="floatingInputGrid bg-transparent ">Email</label>
                                        </div>
                                    </div>
                                    <div className="form-floating contact-input-box">
                                        <textarea className="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                                        <label htmlFor="floatingTextarea2 bg-transparent">Message</label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-dark border rounded-pill my-2">Send</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Contact;