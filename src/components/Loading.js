import Skeleton from "react-loading-skeleton";


function Loading() {


    return (
        <>
            <div className="col-md-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-2">
                <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-2">
                <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-2">
                <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                </div>

            </div>
            <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 col-6 mb-2">
                <div className="card border-0 img-box" style={{ height: '410px', backgroundColor: '#8a8684' }}>
                </div>
            </div>
        </>
    );
}

export default Loading;