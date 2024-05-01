import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './Loader';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Singlecard() {

    const [data, setData] = useState({})
    const [productPhotos, setProductPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const location = useLocation();
    const id = location.state

    const getProductDetail = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id}&country=IN`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '86e0ab6763msh576ab634def7f98p1aaa68jsnb67ae0e01049',
                // 'X-RapidAPI-Key': '8fd0b0ab8dmshe84a719f61c59bap1c8487jsnbb49cf74a228',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        setLoading(true)

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data)
            setProductPhotos(result.data.product_photos)
            setLoading(false)

        } catch (error) {
            setErrorMsg(true)
        }
    }

    useEffect(() => {
        getProductDetail();
    }, [])

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

    return (
        <div className="singlecard-section overflow-hidden">
            {errorMsg && (<p className='fs-2 fw-bold text-center'>An error occurred while fetching data.</p>)}
            {loading ? (<Loader />) : (
                <div className="row" style={{ backgroundColor: '#fff' }}>
                    <div className="col-md-2 py-2">
                        <div className="row row-cols-6 row-cols-md-1 g-2 d-flex justify-content-center">
                            {
                                productPhotos.map((item) => {
                                    return (
                                        <div className="col">
                                            <div className="card single-card-sm-img border-0">
                                                <img src={item} className="" alt="..." />
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
                                            <img src={data.product_photo} className="img-fluid rounded-start" alt={data.product_title} style={{ height: "63vh" }} />
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
                    </div>

                    <div className="col-md-1"></div>
                </div>
            )}
        </div>
    );
}

export default Singlecard;