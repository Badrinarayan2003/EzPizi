import { useEffect, useState } from 'react';
import Loading from './Loading'
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Collections from './Collections';
import Category from './Category';

function Product() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getData = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=oversize-printed-tshirts-hoodies-jackets&page=2&country=IN&category_id=aps`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3ef652fb5dmsh1d8bf2f85b2e18fp152748jsn394c93d990af',
                // 'X-RapidAPI-Key': 'ddca188a58mshd0915e668d7ff15p105186jsn898f2f1b63db',
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
        const [isSwiping, setIsSwiping] = useState(false);


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
            slidesToShow: 4,
            swipeToSlide: true,
            beforeChange: handleSwipeStart,
            afterChange: handleSwipeEnd,
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
            <Collections />
            <Category />
            <div className="row">
                <h1 className="fw-bold py-3 text-center">Featured Products</h1>
                <div className="px-4">
                    <p className="text-end text-decoration-underline">Swipe <i class="fa fa-light fa-arrow-right"></i></p>
                </div>
                {loading ? (<Loading />) : (<ProductCard />)}
                {errorMsg && (<p className='fs-2 fw-bold text-center'>An error occurred while fetching data.</p>)}
            </div>
        </div >
    );
}

export default Product;












