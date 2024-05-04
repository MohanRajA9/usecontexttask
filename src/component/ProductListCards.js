import Rating from '@mui/material/Rating';
export function ProductListCards({ data, index, handleToAdd, handleSingleProduct }) {
    const percentageAmout = (100 * data.discountPercentage) / data.price;
    const dataPriceA = data.price - percentageAmout;
    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">

                    <button onClick={handleSingleProduct} type='button' style={{ border: "none", background: "none" }}>
                        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>

                        <img className="card-img-top" style={{ width: "100%", height: "200px" }} src={data.thumbnail} alt="..." />
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{data.name}</h5>
                                <h5 className="fw-bolder">{data.title}</h5>
                                <Rating name="read-only" value={data.rating} readOnly />
                                <div>
                                    <p>{data.description}</p>
                                </div>
                                <span className="text-muted">₹<s>{data.price}</s>{` Offer : ₹${dataPriceA.toFixed(2)}`}</span>
                            </div>
                        </div>
                    </button>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={handleToAdd}>
                            Add to cart
                        </button></div>
                    </div>
                </div>
            </div>
        </>



    );

}


