import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SingleProductLoader from './SingleProductLoader';

function Singlecard() {

    let [count, setCount] = useState(1)

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


    const location = useLocation();
    const cardData = location.state

    const [data, setData] = useState([])
    const [errorMsg, setErrorMsg] = useState(false)
    const [loading, setLoading] = useState(false)

    const getData = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${cardData.key}&country=IN`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8d97104967msh968c09b09c3f75ep1dda6fjsncccc79e94bc1',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };
        setLoading(true)
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data)
            setLoading(false)
        } catch (error) {
            setErrorMsg(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(data);
    let price = data.product_price ? Number(data.product_price.replace('₹', '').replace(',', '')) : "";
    let originalPrice = data.product_original_price ? Number(data.product_original_price.replace('₹', '').replace(',', '')) : "";

    let offer = price / originalPrice * 100





    const Product = () => {

        return (
            <div className="card border-0">
                <div className="row g-0">
                    <div className="col-md-5 col-sm-6 single-img-box">
                        <img src={data.product_photo} className="img-fluid rounded-start" alt={data.product_title} />
                    </div>
                    <div className="col-md-7 col-sm-6">
                        <div className="card-body single-card-body" style={{ height: '100%' }}>
                            <p className="card-text">{data.product_title}</p>
                            <p className="rating-icon fw-bold"><i className="fa fa-solid fa-star" style={{ color: '#F0A53D' }}></i> {data.product_star_rating}</p>
                            <div className='my-3 d-flex align-items-center price-box'>
                                <p className='mb-0 me-3 price' style={{ color: 'red' }}>Rs {data.product_price && data.product_price.slice(1)}</p>
                                <p className='mb-0 me-4 price'>Rs {data.product_original_price && data.product_original_price.slice(1)}</p>
                                <p className='mb-0 fw-bold btn rounded-pill border-0 off'>save <span>{100 - Math.round(offer)}%</span></p>
                            </div>
                            <div className='size-chart-box my-4'>
                                <p className='size'>Size: <span className='fw-bold'>S</span></p>
                                <div className='size-chart d-flex gap-4'>
                                    <p className='mb-0'>S</p>
                                    <p className='mb-0'>M</p>
                                    <p className='mb-0'>XL</p>
                                    <p className='mb-0'>XXL</p>
                                </div>
                            </div>
                            <div className='single-count-box my-3'>
                                <p className='quantity'>Quantity:</p>
                                <div className='count d-flex align-items-center gap-3'>
                                    <p className='mb-0 fw-bold' onClick={handleDecrement}>-</p>
                                    <p className='mb-0'>{count}</p>
                                    <p className='mb-0 fw-bold' onClick={handleIncrement}>+</p>
                                </div>
                            </div>
                            <div className='single-card-bnt-box my-5 d-flex gap-3'>
                                <a href='/' className='btn border rounded-pill  fw-bold'>Add to cart</a>
                                <a href='/' className='btn  rounded-pill fw-bold'>Buy now</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="singlecard-section">
            {errorMsg ? (<h3 className='text-center py-1'>Error Occurred While Fething Data</h3>) : ""}
            <div className="container">
                {loading ? <SingleProductLoader /> : <Product />}
                {/* <div className='single-card-description my-3'>
                    <p className='mb-0 fw-bold'>Description:</p>
                    <p className='px-5'>{data.product_description}</p>
                </div> */}
            </div>

        </div>
    );
}

export default Singlecard;