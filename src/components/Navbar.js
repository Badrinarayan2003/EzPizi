import { useState } from "react";


function Navbar() {
    const [color, setColor] = useState(false)
    const handleColor = () => {
        if (window.scrollY >= 180) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', handleColor)

    return (

        <nav className={color ? "navbar navbar-expand-lg navbar-light position-fixed w-100 nav-bg" : "navbar navbar-expand-lg navbar-light position-fixed w-100"}>
            <div className="container">
                <div>
                    <img src="/images/logo2.png" alt="logo" className="navbar-brand mx-auto" style={{width:'6rem'}}/>
                </div>

                <div className="buttons nav-buttons">
                    <a href="/" className="btn btn1 border-0 fw-bold"><i className="fa fa-solid fa-search me-1"></i></a>
                    <a href="/" className="btn btn2 border-0"><i className="fa fa-shopping-cart"></i><span>10</span></a>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;