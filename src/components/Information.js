function Information() {
    return (
        <div className="info-section">
            <div className="container info-container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators" id="info-carousel-indic" style={{ bottom: '-41px' }}>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <span><i className="fa fa-regular fa-cube" style={{ fontSize: '1.5rem' }}></i></span>
                            <h5 className="fw-bold">Free Delivery</h5>
                            <p>Free delivery on above Rs. 999/- of order</p>
                        </div>
                        <div className="carousel-item text-center">
                            <span style={{ fontSize: '1.2rem' }} className="fw-bold">24x7</span>
                            <h5 className="fw-bold">Customer Support</h5>
                            <p>Instant live chat support available 24/7 for all your order-related queries. Get help now!</p>
                        </div>
                        <div className="carousel-item text-center">
                            <span><i className="fa fa-solid fa-lock" style={{ fontSize: '1.5rem' }}></i></span>
                            <h5 className="fw-bold">Secure Payment</h5>
                            <p>make an easy payments via Cards, UPI, and QR code for a seamless checkout experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;