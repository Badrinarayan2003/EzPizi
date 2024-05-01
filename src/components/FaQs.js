function FaQs() {
    return (
        <div className="faqs-section">
            <div className="container  rounded faqs-container">

                <div className="row">
                    <div className="col-md-5 faq-box-one">
                        <h2 className="text-center  fw-bold">Frequently</h2>
                        <h2 className="text-center  fw-bold">Asked Questions.</h2>
                        <p className=" fw-bold">If you have any other questions, please don't hesitate to contact us.</p>
                    </div>
                    <div className="col-md-7 faq-box-two border border-light">
                        <h3 className="text-center text-light fw-bold py-1">FAQs</h3>
                        <div className="accordion accordion-flush " id="accordionFlushExample">
                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed text-light fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: '#15cefc', boxShadow: 'none' }}>
                                        How long will it take to get my order?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fw-bold">
                                        Your order will typically arrives within 5 to 7 business days.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed text-light fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ backgroundColor: '#15cefc', boxShadow: 'none' }}>
                                        How can I track my order?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fw-bold">Upon placing your order, you'll receive a tracking link via email associated with your account for convenient order tracking.</div>
                                </div>
                            </div>
                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed text-light fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ backgroundColor: '#15cefc', boxShadow: 'none' }}>
                                        What if my order arrives damaged?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fw-bold">If your order arrives damaged, please connect with us through our designated contact section. We're here to promptly assist in replacing your order and ensuring your satisfaction.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default FaQs;