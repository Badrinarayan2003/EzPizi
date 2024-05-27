import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import { useState } from 'react';

function Collections() {
    const navigate = useNavigate()
    const [isSwiping, setIsSwiping] = useState(false);


    const handleSwipeStart = () => {
        setIsSwiping(true);
    };

    const handleSwipeEnd = () => {
        setIsSwiping(false);
    };

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        beforeChange: handleSwipeStart,
        afterChange: handleSwipeEnd,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 828,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="collection-section overflow-hidden">
            <h1 className="my-3 text-dark fw-bold text-center">Our Collections</h1>
            <div className="collection-container py-2 px-4">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div className="card text-white"
                                onClick={() => {
                                    if (!isSwiping) {
                                        navigate("/targetcollection", { state: { img: '/images/mens_bg.jpg', searchKey: "menswear", title: "For Mens" } })
                                    }
                                }}>
                                <img src="/images/mens_bg.jpg" className="d-block " alt="mens" style={{ width: '100%', height: '180px' }} />
                                <div className="card-img-overlay d-flex justify-content-center align-items-center collection-text-box">
                                    <h5 className="card-title collection-text">Mens Fashion</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-white"
                                onClick={() => {
                                    if (!isSwiping) {
                                        navigate("/targetcollection", { state: { img: '/images/womens_bg.jpg', searchKey: "womenswear", title: "For Womens" } })
                                    }
                                }}>
                                <img src="/images/womens_bg.jpg" className="d-block " alt="mens" style={{ width: '100%', height: '180px' }} />
                                <div className="card-img-overlay d-flex justify-content-center align-items-center collection-text-box">
                                    <h5 className="card-title collection-text">Womens Fashion</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card  text-white"
                                onClick={() => {
                                    if (!isSwiping) {
                                        navigate("/targetcollection", { state: { img: '/images/iphone_bg.jpeg', searchKey: "iphone", title: "iPhone" } })
                                    }
                                }}>
                                <img src="/images/iphone_bg.jpeg" className="d-block " alt="iphone" style={{ width: '100%', height: '180px' }} />
                                <div className="card-img-overlay d-flex justify-content-center align-items-center collection-text-box">
                                    <h5 className="card-title collection-text">iphone</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card  text-white"
                                onClick={() => {
                                    if (!isSwiping) {
                                        navigate("/targetcollection", { state: { img: '/images/watch_bg.jpeg', searchKey: "watch", title: "Watches" } })
                                    }
                                }}>
                                <img src="/images/watch_bg.jpeg" className="d-block" alt="electronic" style={{ width: '100%', height: '180px' }} />
                                <div className="card-img-overlay d-flex justify-content-center align-items-center collection-text-box">
                                    <h5 className="card-title collection-text">Watches</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card  text-white"
                                onClick={() => {
                                    if (!isSwiping) {
                                        navigate("/targetcollection", { state: { img: '/images/jewellery_bg.jpg', searchKey: "jewellery", title: "Jewellery" } })
                                    }
                                }}>
                                <img src="/images/jewellery_bg.jpg" className="d-block " alt="womens" style={{ width: '100%', height: '180px' }} />
                                <div className="card-img-overlay d-flex justify-content-center align-items-center collection-text-box">
                                    <h5 className="card-title collection-text">Jewelleries</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card  text-white"
                                onClick={() => {
                                    if (!isSwiping) {
                                        navigate("/targetcollection", { state: { img: '/images/electronic_bg.jpg', searchKey: "electronics", title: "Electronics" } })
                                    }
                                }}>
                                <img src="/images/electronic_bg.jpg" className="d-block " alt="iphone" style={{ width: '100%', height: '180px' }} />
                                <div className="card-img-overlay d-flex justify-content-center align-items-center collection-text-box">
                                    <h5 className="card-title collection-text">Electronics</h5>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


        </div>
    );
}

export default Collections;