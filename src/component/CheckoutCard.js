import React from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutCard({ value, index, cart, setCart }) {
    const navigate = useNavigate();

    let stock = [];
    for (let i = 1; i <= value.stock; i++) {
        stock.push(i);
    }
    const handleCal = (e) => {
        const valueDisplay = e.target.value;
        setCart((preData) => preData.map((product) => {
            if (product.id === value.id) {
                return { ...product, count: parseInt(valueDisplay) };
            }
            return product
        })
        )
    };
    const handleToSp = () => {
        navigate(`/add/${value.id}`)
    }
    return (
        <div key={index} className="card w-75 m-4">
            <div className="card-body d-flex align-items-center">
                <button style={{border:"none",background:"none"}} onClick={handleToSp}>
                <img src={value.thumbnail} alt={value.title} className="img-fluid rounded mr-3" style={{ width: "100px", height: "auto" }} />
                </button>

                <div style={{marginLeft:"10px"}}>
                    <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{value.brand}</div>
                    <div className="badge bg-light text-dark position-absolute" style={{ top: "0.5rem", right: "5rem" }}>{` category : ${value.category}`}</div>
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <label htmlFor={`quantityDropdown-${index}`}>Quantity:</label>
                            <select id={`quantityDropdown-${index}`} value={value.count} onChange={handleCal}>
                                {stock.map((data, index) => (
                                    <Option key={index} data={data} />
                                ))}
                            </select>
                        </div>
                        <div>
                            {`₹ ${value.price}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

function Option({ data }) {
    return <option value={data}>{data}</option>;
}

export default CheckoutCard;
