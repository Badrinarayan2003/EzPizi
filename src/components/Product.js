import { useEffect, useState } from 'react';
import Loading from './Loading'
import Collections from './Collections'
import { useNavigate } from 'react-router-dom';


function Product() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    let [pageCount, setPageCount] = useState(1)

    const navigate = useNavigate()

    const getData = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=newarrival&page=${pageCount}&country=IN&category_id=aps`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '873a98717fmsh70a293fb3ae9fcap179012jsna5c7c20b120e',
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
        if (pageCount < 3) {
            setPageCount(pageCount = pageCount + 1)
        }
    }

    const handleDecrement = () => {
        if (pageCount >1) {
            setPageCount(pageCount = pageCount-1)
        }
    }



    const ProductCard = () => {
        return (
            <>
                <h1 className="fw-bold py-3">New Arrivals</h1>
                {
                    data.map((product) => {
                        return (
                            <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-4 product-box" key={product.asin}  >
                                <div className="card border-0 img-box" onClick={() => { navigate('/singlecard', { state: { key: `${product.asin}` } }) }}>
                                    <img src={product.product_photo} className="card-img-top" alt={product.product_title} />
                                    <a type="button" href='/' className="btn btn-dark fw-bold rounded-pill" id='add-to-cart-btn'>+add to</a>
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
        <div className="container product-section">
            <Collections />
            <div className="row">
                {loading ? (<Loading />) : (<ProductCard />)}
                {errorMsg && (<p className='fs-2 fw-bold text-center'>An error occurred while fetching data.</p>)}
            </div>

            <nav aria-label="Page navigation example ">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" aria-label="Previous" onClick={handleDecrement}>
                            <i className="fa fa-sharp fa-light fa-arrow-left text-dark"  ></i>
                        </a>
                    </li>
                    <li className="page-item"><span className="page-link text-dark">1</span></li>
                    <li className="page-item"><span className="page-link text-dark">2</span></li>
                    <li className="page-item"><span className="page-link text-dark">3</span></li>
                    <li className="page-item">
                        <a className="page-link" aria-label="Next" onClick={handleIncrement}>
                            <i className="fa fa-sharp fa-light fa-arrow-right text-dark"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default Product;












