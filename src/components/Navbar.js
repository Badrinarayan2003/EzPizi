import { useState } from "react";


function Navbar() {
    const [visible, setVisible] = useState(false)

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
        <>
            <nav className={color ? "navbar navbar-expand-lg navbar-light position-fixed w-100 nav-bg" : "navbar navbar-expand-lg navbar-light position-fixed w-100"}>
                <div className="container">
                    <div>
                        <img src="/images/ez-pizi.png" alt="logo" className="navbar-brand mx-auto" style={{ width: '3rem',cursor:'pointer' }} />
                    </div>

                    <div className="buttons nav-buttons d-flex align-items-center">
                        <a className="btn btn1 border-0 fw-bold" onClick={() => setVisible(!visible)} ><i className="fa fa-solid fa-search me-1"></i></a>
                        <a href="/" className="btn btn2 border-0"><i className="fa fa-shopping-cart"></i><span>10</span></a>
                    </div>
                </div>
            </nav>

            <div className={visible ? "search-form search-show" : "search-form"} id="nav-search">
                <input type="text" placeholder="Search..." />
            </div>
        </>
    )
}
export default Navbar;