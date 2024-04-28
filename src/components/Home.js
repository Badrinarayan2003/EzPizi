import Product from './Product.js';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="hero overflow-hidden">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators justify-content-end" id="hero-carousel-indicator" style={{ marginRight: '10%' }}>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active slider-cotent-box" >
                        <img src="/images/hero_img3.jpg" className="d-block w-100" alt="womens_bg" />
                        <div className="carousel-caption d-block d-md-block" id="hero-content-box">
                            <h2>Women's Style Fusion</h2>
                            <a type="button"
                                onClick={() => { navigate("/targetcollection", { state: { img: '/images/womens_bg.jpg', searchKey: "womensfashion", title: "For Womens" } }) }}
                                className="btn btn-light border fw-bold rounded-pill"
                            >Explore</a>
                        </div>
                    </div>
                    <div className="carousel-item slider-cotent-box">
                        <img src="/images/hero_img5.jpg" className="d-block w-100" alt="mens_bg" />
                        <div className="carousel-caption d-block d-md-block" id="hero-content-box">
                            <h2>Elevate Your Style Today!</h2>
                            <a type="button"
                                onClick={() => { navigate('/targetcollection', { state: { img: "/images/hero_img5.jpg", searchKey: "menswear", title: "Mens Fashion" } }) }}
                                className="btn btn-light border fw-bold rounded-pill"
                            >Shop</a>
                        </div>
                    </div>

                    <div className="carousel-item slider-cotent-box" >
                        <img src="/images/hero_img8.jpg" className="d-block w-100" alt="new_arrival_bg" />
                        <div className="carousel-caption d-block d-md-block" id="hero-content-box">
                            <h2>Check Out Our New Arrivals</h2>
                            <a type="button"
                                onClick={() => { navigate("/targetcollection", { state: { img: "/images/hero_img8.jpg", searchKey: "both-mens-womens-wear", title: "New Arrivals" } }) }}
                                className="btn btn-light border fw-bold rounded-pill">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <Product />
        </div>
    )
}

export default Home;