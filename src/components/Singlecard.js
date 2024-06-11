import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './Loader';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Singlecard() {

    const [data, setData] = useState({})
    const [productPhotos, setProductPhotos] = useState([])
    const [productImg, setProductImg] = useState("")
    const [similarProduct, setSimilarProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const location = useLocation();
    const [id, setId] = useState(location.state)

    const getProductDetail = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id}&country=IN`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '033d151b92mshe72ed1251e3dd7bp10bc7fjsn22c05c304c35',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        setLoading(true)

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data)
            setProductImg(result.data.product_photo)
            setProductPhotos(result.data.product_photos)
            setSimilarProduct(result.data.product_variations.color)
            setLoading(false)
            setErrorMsg(false)

        } catch (error) {
            setErrorMsg(true)
        }
    }

    useEffect(() => {
        getProductDetail();
    }, [id])

    let price = data && data.product_price ? Number(data.product_price.replace('₹', '').replace(',', '')) : "";
    let originalPrice = data && data.product_original_price ? Number(data.product_original_price.replace('₹', '').replace(',', '')) : "";
    let offer = price / originalPrice * 100

    let [count, setCount] = useState(1)
    const [size, setSize] = useState('S')

    const handleIncrement = () => {
        if (count < 9) {
            setCount(count = count + 1)
        }
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count = count - 1)
        }
    }

    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: true,
        responsive: [
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    };

    return (
        <div className="singlecard-section overflow-hidden">
            {errorMsg && (<p className='fs-2 fw-bold text-center'>An error occurred while fetching data.</p>)}
            {loading ? (<Loader />) : (
                <div className="row" style={{ backgroundColor: '#fff' }}>
                    <div className="col-md-2 py-2">
                        <div className="row row-cols-6 row-cols-md-1 g-2 d-flex justify-content-center">
                            {
                                productPhotos.map((item, index) => {
                                    return (
                                        <div className="col" key={index}>
                                            <div className="card single-card-sm-img border-0">
                                                <img src={item} className="" alt={index} onMouseOver={() => setProductImg(item)} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card border-0">
                                    <div className="row g-0">
                                        <div className="col-md-5 d-flex justify-content-center single-card-img">
                                            <img src={productImg} className="img-fluid rounded-start" alt={data.product_title} style={{ height: "63vh" }} />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body single-card-body">
                                                <p className="fw-bold mb-0">{data.product_information && data.product_information.Department}</p>
                                                <p className=" mb-0">{data.product_information && data.product_information["Generic Name"]}</p>
                                                <p className="card-text" style={{ color: 'gray' }}>{data.product_title}</p>
                                                <p className="rating-icon fw-bold"><i className="fa fa-solid fa-star" style={{ color: '#F0A53D' }}></i> {data.product_star_rating}</p>
                                                <div className='my-2 d-flex align-items-center price-box'>
                                                    <p className='mb-0 me-3 price' style={{ color: 'red' }}>Rs {data.product_price}</p>
                                                    <p className='mb-0 me-4 price'>Rs {data.product_original_price && data.product_original_price.slice(1)}</p>
                                                    <p className='mb-0 fw-bold btn rounded-pill border-0 off'>save <span>{100 - Math.round(offer)}%</span></p>
                                                </div>
                                                <div className='size-chart-box my-2'>
                                                    <p className='size mb-0'>Size: <span className='fw-bold'>{size}</span></p>
                                                    <div className='size-chart d-flex gap-4'>
                                                        <p className='mb-0' onClick={() => setSize('S')}>S</p>
                                                        <p className='mb-0' onClick={() => setSize('M')}>M</p>
                                                        <p className='mb-0' onClick={() => setSize('XL')}>XL</p>
                                                        <p className='mb-0' onClick={() => setSize('XXL')}>XXL</p>
                                                    </div>
                                                </div>
                                                <div className='single-count-box my-2'>
                                                    <p className='quantity mb-0 fw-bold'>Quantity:</p>
                                                    <div className='count d-flex align-items-center gap-3'>
                                                        <p className='mb-0 fw-bold' onClick={handleDecrement}>-</p>
                                                        <p className='mb-0'>{count}</p>
                                                        <p className='mb-0 fw-bold' onClick={handleIncrement}>+</p>
                                                    </div>
                                                </div>
                                                <div className='single-card-bnt-box my-3 d-flex gap-3'>
                                                    <a className='btn border rounded-pill fw-bold'
                                                        onClick={() =>
                                                            dispatch(addToCart({
                                                                id: data.asin,
                                                                photo: data.product_photo,
                                                                title: data.product_title,
                                                                price: data.product_price,
                                                                quantity: count
                                                            }))
                                                        }
                                                    >Add to cart</a>
                                                    <a href='/' className='btn  rounded-pill fw-bold'>Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {similarProduct ? <p className="mb-0 my-1 px-3">You may like</p> : ""}
                                <div className="row my-2">
                                    <Slider {...settings}>
                                        {
                                            similarProduct?.map((item) => {
                                                return (
                                                    <div key={item.asin}>
                                                        <div
                                                            class="card align-items-center"
                                                            onClick={() => setId(item.asin)}
                                                        >
                                                            <img src={item.photo} alt="..." style={{ width: "60px", height: "65px" }} />
                                                            <div >
                                                                <p class="card-text" style={{ fontSize: "0.6rem" }}>{item.value}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            )}
        </div>
    );

}
export default Singlecard;