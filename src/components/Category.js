import { useNavigate } from "react-router-dom";


function Category() {
    const navigate = useNavigate()

    return (
        <div className="category-section overflow-hidden py-3">
            <h1 className="fw-bold py-3 text-center">Product Categories</h1>
            <div className="row g-3 d-flex justify-content-center">
                <div className="col-md-3 col-sm-4 col-4 category-box">
                    <div class="card text-white" style={{ height: '100%' }} >
                        <img src="/images/men_cat.jpg" class="card-img" alt="..." style={{ height: "100%" }} />
                        <div class="card-img-overlay d-flex flex-column justify-content-end category-text-box">
                            <h5 class="card-title">Mens</h5>
                            <div>
                                <a
                                    class="card-text btn btn-dark rounded-pill fw-bold cat-btn"
                                    onClick={() => { navigate("/targetcollection", { state: { img: '/images/mens_bg.jpg', searchKey: "menswear", title: "For Mens" } }) }}
                                >Shop</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-4 category-box">
                    <div class="card text-white" style={{ height: '100%' }}>
                        <img src="/images/womens_cat.jpg" class="card-img" alt="..." style={{ height: "100%" }} />
                        <div class="card-img-overlay d-flex flex-column justify-content-end category-text-box">
                            <h5 class="card-title">Womens</h5>
                            <div>
                                <a
                                    class="card-text btn btn-dark rounded-pill fw-bold cat-btn"
                                    onClick={() => {
                                        navigate("/targetcollection", { state: { img: '/images/womens_bg.jpg', searchKey: "womenswear", title: "For Womens" } })
                                    }}
                                >Shop</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-4 category-box">
                    <div class="card text-white" style={{ height: '100%' }} >
                        <img src="/images/arrival_cat.jpg" class="card-img" alt="..." style={{ height: "100%" }} />
                        <div class="card-img-overlay d-flex flex-column justify-content-end category-text-box">
                            <h5 class="card-title">New Arrivals</h5>
                            <div>
                                <a
                                    class="card-text btn btn-dark rounded-pill fw-bold cat-btn"
                                    onClick={() => {
                                        navigate("/targetcollection", { state: { img: "/images/hero_img8.jpg", searchKey: "both-mens-womens-wear", title: "New Arrivals" } })
                                    }}
                                >Shop</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;