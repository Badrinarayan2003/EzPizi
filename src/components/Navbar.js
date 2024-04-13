import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate()
    const [searchData, setSearchData] = useState("")
    const handleChange = (evt) => {
        setSearchData(evt.target.value)
    }
    const handleClick=()=>{
        navigate("/search-result", { state: { searchData } })
        setVisible(false)
    }

    return (
        <>
            <nav className={color ? "navbar navbar-expand-lg navbar-light position-fixed w-100 nav-bg" : "navbar navbar-expand-lg navbar-light position-fixed w-100"}>
                <div className="container">
                    <div>
                        <img src="/images/ez-pizi.png" alt="logo" className="navbar-brand mx-auto" style={{ width: '3rem', cursor: 'pointer' }} />
                    </div>

                    <div className="buttons nav-buttons d-flex align-items-center">
                        <a className="btn btn1 border-0 fw-bold" onClick={() => setVisible(!visible)} ><i className="fa fa-solid fa-search me-1"></i></a>
                        <a href="/" className="btn btn2 border-0"><i className="fa fa-shopping-cart"></i><span>10</span></a>
                    </div>
                </div>
            </nav>

            <div className={visible ? "search-form search-show" : "search-form"} id="nav-search">
                <div className="input-box">
                    <input type="text" placeholder="Search..." onChange={handleChange} />
                    <a onClick={handleClick}><i className="fa fa-solid fa-search"></i></a>
                </div>
            </div>
        </>
    )
}
export default Navbar;