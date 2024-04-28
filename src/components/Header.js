import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]

    };
    return (
        <div className="header-section overflow-hidden">
            <div className="slider-container header-container">
                <Slider {...settings}>
                    <div className="d-flex align-items-center justify-content-center" id="header-box">
                        <p className="fw-bold mb-0 fs-3">Sale</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" id="header-box">
                        <p className="fw-bold mb-0 fs-3">Sale</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" id="header-box">
                        <p className="fw-bold mb-0 fs-3">Sale</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" id="header-box">
                        <p className="fw-bold mb-0 fs-3">Sale</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" id="header-box">
                        <p className="fw-bold mb-0 fs-3">Sale</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Header;