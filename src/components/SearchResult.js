import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function SearchResult() {

    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const location = useLocation()
    const searchRefer = location.state
    const [search, setSearch] = useState(searchRefer.searchData)

    const getData = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${search}&page=2&country=IN&category_id=aps`;
        const options = {
            method: 'GET',
            headers: {
                // 'X-RapidAPI-Key': '3ef652fb5dmsh1d8bf2f85b2e18fp152748jsn394c93d990af',
                'X-RapidAPI-Key': 'ddca188a58mshd0915e668d7ff15p105186jsn898f2f1b63db',
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
        let timeOut = setTimeout(() => {
            getData()
        }, 2000);

        return () => {
            clearTimeout(timeOut)
        }

    }, [search])


    const handlChange = (evt) => {
        setSearch(evt.target.value)
    }


    const dispatch = useDispatch()

    const Card = () => {
        return (
            <>
                {
                    data.map((product) => {
                        return (
                            < div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-4 product-box" key={product.asin} >
                                <div className="card border-0 img-box">
                                    <img src={product.product_photo} className="card-img-top" alt={product.product_title} onClick={() => { navigate("/singlecard", { state: { product } }) }} />
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
                            </div >
                        )
                    })
                }
            </>
        )
    }


    return (
        <div className="search-result-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="search-box float-end">
                            <input type="text" placeholder="Search..." value={search} onChange={handlChange} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{ padding: '3rem 0' }}>
                    {loading ? (<Loading />) : (<Card />)}
                    {errorMsg ? <h3 className="text-center fw-bold">Can't Fetch Data</h3> : ""}
                </div>
            </div>
        </div>
    );

}
export default SearchResult;