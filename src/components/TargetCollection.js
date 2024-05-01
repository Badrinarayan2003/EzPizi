import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading'

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function TargetCollection() {

    const navigate = useNavigate();
    const location = useLocation();
    const foreignData = location.state;

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    let [pageCount, setPageCount] = useState(1)

    const getData = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${foreignData.searchKey}&page=${pageCount}&country=IN&category_id=aps`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8b871a881emsh768c3a235462a8dp10f159jsn4e9e53f9413f',
                // 'X-RapidAPI-Key': '8fd0b0ab8dmshe84a719f61c59bap1c8487jsnbb49cf74a228',
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
    }, [pageCount])


    const handleIncrement = () => {
        if (pageCount < 2) {
            setPageCount(pageCount = pageCount + 1)
        }
    }

    const handleDecrement = () => {
        if (pageCount > 1) {
            setPageCount(pageCount = pageCount - 1)
        }
    }

    const dispatch = useDispatch()

    const ProductCard = () => {
        return (
            <>
                {
                    data.map((product) => {
                        return (
                            <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-4 product-box" key={product.asin}>
                                <div className="card border-0 img-box" >
                                    <img src={product.product_photo} className="card-img-top" alt={product.product_title} onClick={() => { navigate("/singlecard", { state: product.asin }) }} />
                                    <a type="button"
                                        className="btn btn-dark fw-bold rounded-pill"
                                        id='add-to-cart-btn'
                                        onClick={() => dispatch(addToCart({
                                            id: product.asin,
                                            photo: product.product_photo,
                                            title: product.product_title,
                                            price: product.product_price,
                                            quantity: 1
                                        }))}
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
            </>
        )
    }

    return (
        <div className="product-collec-section">
            <div className="row mb-5">
                <div className="col-12">
                    <div className="banner">
                        <div className="card text-white pro-collec-box">
                            <img src={foreignData.img} className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                <h2 className="card-title">{foreignData.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {loading ? (<Loading />) : (<ProductCard />)}
                    {errorMsg && (<p className='fs-2 fw-bold text-center'>An error occurred while fetching data.</p>)}
                </div>
                <nav aria-label="Page navigation example ">
                    <ul className="pagination justify-content-center" style={{ marginBottom: '0rem', paddingBottom: '1rem' }}>
                        <li className="page-item page-indicator">
                            <a className="page-link" aria-label="Previous" onClick={handleDecrement}>
                                <i className="fa fa-sharp fa-light fa-arrow-left text-dark"></i>
                            </a>
                        </li>
                        <li className="page-item"><span className="page-link text-dark">1</span></li>
                        <li className="page-item"><span className="page-link text-dark">2</span></li>
                        <li className="page-item page-indicator">
                            <a className="page-link" aria-label="Next" onClick={handleIncrement}>
                                <i className="fa fa-sharp fa-light fa-arrow-right text-dark"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TargetCollection;