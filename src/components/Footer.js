function Footer() {
    return (
        <div className="footer-section overflow-hidden" style={{ padding: '1rem 0 0 0' }}>
            <div className="row d-flex justify-content-center" style={{ padding: '2rem 0' }}>
                <div className="col-md-2 col-sm-3 col-12 d-flex justify-content-center">
                    <div className="footer-add">
                        <h3 className="mb-3 fw-bold">Location</h3>
                        <p className="mb-1">India, Odisha</p>
                        <p>Jajpur 754082</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2"></div>
                <div className="col-md-2 col-sm-2"></div>
                <div className="col-md-2 col-sm-2"></div>
                <div className="col-md-2 col-sm-2"></div>
            </div>
            <div className="row d-flex justify-content-center" style={{ backgroundColor: "#0c0b0b", padding: "1rem 0" }}>
                <div className="col-md-5">
                    <div className="footer-bottom-box-one">
                        <p className="footer-copy-right text-light fw-bold">@2024 EzPizi</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="footer-bottom-box-two d-flex">
                        <div className="social-icon d-flex justify-content-center align-items-center rounded-circle"><i className="fa fa-brands fa-instagram"></i></div>
                        <div className="social-icon d-flex justify-content-center align-items-center rounded-circle"><i className="fa fa-brands fa-linkedin"></i></div>
                        <div className="social-icon d-flex justify-content-center align-items-center rounded-circle"><i className="fa fa-brands fa-twitter"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

