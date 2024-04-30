import { useNavigate } from "react-router-dom";


function Category() {
    const navigate = useNavigate()

    return (
        <div className="category-section overflow-hidden py-3">
            <h1 className="fw-bold py-3 text-center">Product Categories</h1>
            <div className="row g-3 d-flex justify-content-center" style={{ padding: '0 0.5rem' }}>
                <div className="col-md-4 col-sm-4 category-box">
                    <div className="category-box-one d-flex flex-column-reverse">
                        <div className="category-content-box">
                            <h4 className="fw-bold">Mens</h4>
                            <a className="btn btn-dark rounded-pill fw-bold"
                                onClick={() => { navigate("/targetcollection", { state: { img: "/images/hero_img5.jpg", searchKey: "menswear", title: "Mens Fashion" } }) }}
                            >Shop</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 category-box">
                    <div className="category-box-two d-flex flex-column-reverse">
                        <div className="category-content-box">
                            <h4 className="fw-bold">Arrivals</h4>
                            <a className="btn btn-dark rounded-pill fw-bold"
                                onClick={() => { navigate("/targetcollection", { state: { img: "/images/hero_img8.jpg", searchKey: "both-mens-womens-wear", title: "New Arrivals" } }) }}
                            >Shop</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 category-box">
                    <div className="category-box-three d-flex flex-column-reverse">
                        <div className="category-content-box">
                            <h4 className="fw-bold">Womens</h4>
                            <a className="btn btn-dark rounded-pill fw-bold"
                                onClick={() => { navigate("/targetcollection", { state: { img: '/images/womens_bg.jpg', searchKey: "womensfashion", title: "For Womens" } }) }}
                            >Shop</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;