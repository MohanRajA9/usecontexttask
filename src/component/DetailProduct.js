import { useParams } from "react-router-dom";
import { dataSet } from "./Main";
import { useContext } from "react";
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";


function DetailProduct() {
    const { productid } = useParams();
    const navigate = useNavigate();
    const main = useContext(dataSet)
    const cart = main.cart;
    const setCart = main.setCart;
    const products = main.realData;
    const dataDetail = products[productid - 1]
    const existingData = cart.find((ele) => ele.id === dataDetail.id)
    let stock = [];
    for (let i = 1; i <= dataDetail.stock; i++) {
        stock.push(i);
    }

    const handleAdd = (e) => {
        const qCount = parseInt(e.target.value)
        if(existingData !== undefined){
            setCart(preData => {
                return (
                    preData.map((data, index) => {
                    if (data.id === existingData.id) {
                        return { ...existingData, count: qCount }
                    }
                    return data;
                }))
            })
        }else{
           
            setCart((preData)=>[...preData,{...dataDetail,count:qCount}]);
        }
       
    }
    const handleGoCo = () =>{
        return navigate("/checkout");
    }


    return (
        <>
            <div className="container mt-2 mb-1" >
                <div className="card">
                    <div style={{ textAlign: "center" }} className="card-header fw-bolder">
                        {dataDetail.title}
                    </div>
                    <div className="card-body">
                        <div style={{ display: "flex" }}>
                            <div>
                                <img src={dataDetail.thumbnail} alt={dataDetail.title} className="img-fluid rounded float-left mr-3" style={{ width: "500px", height: "300px" }} />
                            </div>
                            <div style={{ marginLeft: "2%" }}>
                                <p className="card-text">{dataDetail.description}</p>
                                <h5 className="card-title"><Rating name="read-only" value={dataDetail.rating} readOnly /></h5>
                                <label>Quantity:</label>
                                <select value={existingData !== undefined ? existingData.count : 0} onChange={handleAdd}>
                                    <option value='' disable>please select</option>
                                    {
                                        stock.map((num, index) => {
                                            return <option key={index} value={num}>{num}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div style={{ marginLeft: "2%" }}>
                                <p>{existingData!==undefined? `Total : ${existingData.count} X ${existingData.count*existingData.price}`: `Total : ${0}` }</p>
                                <button onClick={handleGoCo}>Check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DetailProduct;