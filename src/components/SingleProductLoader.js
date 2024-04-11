function SingleProductLoader() {
    return (
        <div className="card border-0" style={{ height: '50vh',backgroundColor:"rgb(171 173 175)" }}>
            <div className="row g-0">
                <div className="col-md-5 col-sm-6 single-img-box"></div>
                <div className="col-md-7 col-sm-6">
                    <div className="card-body single-card-body" style={{ height: '100%' }}></div>
                </div>
            </div>
        </div>
    );
}

export default SingleProductLoader;