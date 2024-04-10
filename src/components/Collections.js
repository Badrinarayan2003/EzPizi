import { useNavigate } from 'react-router-dom'

function Collections() {
    const navigate = useNavigate()
    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className="border-bottom border-light my-3 text-dark fw-bold">Our Collections</h1>
            </div>
            <div className='container collection-container'>
                <div className='col-md-12'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='row collection-row-box'>
                                    <div className='col-md-4 col-sm-4 col-4  d-flex justify-content-center' id='inner-col'>
                                        <div
                                            className='card w-75'
                                            id='collection-card'
                                            onClick={() => { navigate("/targetcollection", { state: { img: "/images/hero_img5.jpg", searchKey: "menswear", title: "Mens Fashion" } }) }}>
                                            <img src="/images/mens_bg.jpg" className="d-block " alt="mens" />
                                            <div className="carousel-caption d-block d-md-block d-sm-block collec-text-box">
                                                <h4>Men's Fashion</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-4 col-sm-4 col-4  d-flex justify-content-center' id='inner-col'>
                                        <div
                                            className='card w-75'
                                            id='collection-card'
                                            onClick={() => { navigate("/targetcollection", { state: { img: '/images/womens_bg.jpg', searchKey: "womensfashion", title: "For Womens" } }) }}>
                                            <img src="/images/womens_bg.jpg" className="d-block " alt="mens" />
                                            <div className="carousel-caption d-block d-md-block d-sm-block collec-text-box">
                                                <h4>Women's Fashion</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-4 col-sm-4 col-4  d-flex justify-content-center' id='inner-col'>
                                        <div
                                            className='card w-75'
                                            id='collection-card'
                                            onClick={() => { navigate("/targetcollection", { state: { img: '/images/iphone_bg.jpeg', searchKey: "newiphones", title: "Iphones" } }) }}>
                                            <img src="/images/iphone_bg.jpeg" className="d-block " alt="iphone" />
                                            <div className="carousel-caption d-block d-md-block d-sm-block collec-text-box">
                                                <h4>Iphones</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='row collection-row-box'>
                                    <div className='col-md-4 col-sm-4 col-4  d-flex justify-content-center' id='inner-col'>
                                        <div
                                            className='card w-75'
                                            id='collection-card'
                                            onClick={() => { navigate("/targetcollection", { state: { img: '/images/watch_bg.jpeg', searchKey: "smartwatches", title: "Watches" } }) }}>
                                            <img src="/images/watch_bg.jpeg" className="d-block" alt="electronic" />
                                            <div className="carousel-caption d-block d-md-block d-sm-block collec-text-box">
                                                <h4>Watches</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-4 col-sm-4 col-4  d-flex justify-content-center' id='inner-col'>
                                        <div
                                         className='card w-75' 
                                         id='collection-card' 
                                         onClick={() => { navigate("/targetcollection", { state: { img: '/images/jewellery_bg.jpg', searchKey: "goldjewellery", title: "Jewelleries" } }) }}>
                                            <img src="/images/jewellery_bg.jpg" className="d-block " alt="womens" />
                                            <div className="carousel-caption d-block d-md-block d-sm-block collec-text-box">
                                                <h4>Jewelleries</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-4 col-sm-4 col-4  d-flex justify-content-center' id='inner-col'>
                                        <div className='card w-75' id='collection-card'
                                        onClick={() => { navigate("/targetcollection", { state: { img: '/images/electronic_bg.jpg', searchKey: "electronicproducts", title: "Electronics" } }) }}>
                                            <img src="/images/electronic_bg.jpg" className="d-block " alt="Electronics" />
                                            <div className="carousel-caption d-block d-md-block d-sm-block collec-text-box">
                                                <h4>Electronics</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collections;