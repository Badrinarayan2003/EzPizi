import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


function ProductSatisfaction() {
    const [counterOn, setCounterOn] = useState(false)



    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

            <div className="product-satisfaction-section">
                <div className="container">
                    <h1 className="text-center fw-bold">
                        {counterOn && <CountUp start={1} end={100} duration={3} delay={0} />}%
                    </h1>
                    <p className="text-center fw-bold text-light">Product Satisfaction</p>
                </div>
            </div>

        </ScrollTrigger>
    )
}

export default ProductSatisfaction;