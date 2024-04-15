import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

function SearchResult() {

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
                'X-RapidAPI-Key': '50e7534f75mshccdc0d78727a072p1c8486jsnf6f65509751c',
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


    const Card = () => {
        return (
            <>
                {
                    data.map((product) => {
                        return (
                            < div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-4 product-box" key={product.asin} >
                                <div className="card border-0 img-box" >
                                    <img src={product.product_photo} className="card-img-top" alt={product.product_title} />
                                    <a type="button" href='/' className="btn btn-dark fw-bold rounded-pill" id='add-to-cart-btn'>+add to</a>
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