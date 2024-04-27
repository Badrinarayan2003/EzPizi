import { useEffect, useState } from 'react';
import Loading from './Loading'
import Collections from './Collections'
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Product() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getData = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=newarrival&page=2&country=IN&category_id=aps`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3ef652fb5dmsh1d8bf2f85b2e18fp152748jsn394c93d990af',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        setLoading(true)

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data.products)
            setLoading(false)

        } catch (error) {
            setErrorMsg(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const ProductCard = () => {
        const [slidesToShow, setSlidesToShow] = useState(4);
        const [isSwiping, setIsSwiping] = useState(false);

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


        const handleSwipeStart = () => {
            setIsSwiping(true);
        };

        const handleSwipeEnd = () => {
            setIsSwiping(false);
        };

        const handleCardClick = (product) => {
            if (!isSwiping) {
                navigate('/singlecard', { state: { product } });
            }
        };


        const settings = {
            className: "center",
            infinite: false,
            centerPadding: "60px",
            slidesToShow: slidesToShow,
            swipeToSlide: true,
            beforeChange: handleSwipeStart,
            afterChange: handleSwipeEnd
        };

        return (
            <>
                <h1 className="fw-bold py-3 text-center">Featured Products</h1>
                <div className="mx-2">
                    <Slider {...settings}>
                        {
                            data.map((product) => {
                                return (
                                    <div className="d-flex justify-content-center" key={product.asin}>
                                        <div className="card border-0 img-box" id="featured-product-card">
                                            <img
                                                src={product.product_photo}
                                                className="card-img-top"
                                                id="featured-card-img"
                                                alt={product.product_title}
                                                onClick={() => handleCardClick(product)}
                                            />
                                            <a type="button"
                                                className="btn btn-dark fw-bold rounded-pill"
                                                id='add-to-cart-btn'
                                                onClick={() =>
                                                    dispatch(addToCart({
                                                        id: product.asin,
                                                        photo: product.product_photo,
                                                        title: product.product_title,
                                                        price: product.product_price,
                                                        quantity: 1
                                                    }))
                                                }
                                            >+add to</a>
                                            <div className="card-body product-detail-box">
                                                <p className="card-text mb-0 product-title">{product.product_title && product.product_title.substring(0, 35)}..</p>
                                                <p className="rating-icon fw-bold"><i className="fa fa-solid fa-star" style={{ color: '#F0A53D' }}></i> {product.product_star_rating}</p>
                                                <h6 className="card-title fw-bold fs-5">Rs {product.product_price && product.product_price.slice(1)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </>
        )
    }


    return (
        <div className="product-section pb-4 overflow-hidden">
            <div className="row">
                {loading ? (<Loading />) : (<ProductCard />)}
                {errorMsg && (<p className='fs-2 fw-bold text-center'>An error occurred while fetching data.</p>)}
            </div>
        </div >
    );
}

export default Product;












