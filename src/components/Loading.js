import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Loading() {

    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },

        ]
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