import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Loading() {
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1060) {
                setSlidesToShow(4);
            } else if (window.innerWidth >= 688) {
                setSlidesToShow(3);
            } else if (window.innerWidth >= 440) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        // Initial call to set initial state
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        swipeToSlide: true,
    };


    return (
        <>
            <Slider {...settings}>
                <div className=" mb-2">
                    <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                    </div>
                </div>
                <div className=" mb-2">
                    <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                    </div>
                </div>
                <div className=" mb-2">
                    <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                    </div>
                </div>
                <div className=" mb-2">
                    <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                    </div>
                </div>
            </Slider>
        </>
    );
}

export default Loading;