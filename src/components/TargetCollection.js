import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading'


function TargetCollection() {

    const location = useLocation();
    const foreignData = location.state;



    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const getData = async () => {

        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${foreignData.searchKey}&page=2&country=IN&category_id=aps`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '84f9a22f72msh0a533140e334fe5p1a51acjsnf4b148d7c65b',
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
        return (
            <>
                {
                    data.map((product) => {
                        return (
                            <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-4 product-box" key={product.asin}>
                                <div className="card border-0 img-box">
                                    <img src={product.product_photo} className="card-img-top" alt={product.product_title} />
                                    <a type="button" href='/' className="btn btn-dark fw-bold rounded-pill" id='add-to-cart-btn'>+add to</a>
                                    <div className="card-body product-detail-box">
                                        <p className="card-text mb-0 product-title">{product.product_title.substring(0, 35)}..</p>
                                        <p className="rating-icon fw-bold"><i className="fa fa-solid fa-star" style={{ color: '#F0A53D' }}></i> {product.product_star_rating}</p>
                                        <h6 className="card-title fw-bold fs-5">{product.product_price}</h6>
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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner">
                            <div className="card bg-dark text-white pro-collec-box">
                                <img src={foreignData.img} className="card-img" alt="..." />
                                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                    <h2 className="card-title">{foreignData.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {loading ? (<Loading />) : (<ProductCard />)}
                    {errorMsg && (<p className='fs-2 fw-bold text-center'>An error occurred while fetching data.</p>)}
                </div>
            </div>
        </div>
    );
}

export default TargetCollection;