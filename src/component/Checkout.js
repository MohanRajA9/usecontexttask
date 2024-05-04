import { useContext } from "react";
import CheckoutCard from "./CheckoutCard";
import {dataSet} from "./Main"

function Checkout() {
    const main = useContext(dataSet);
    const cart = main.cart;
    const setCart = main.setCart;
    const productsData = main.cart;
    return (
        <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ width: "100%" }}>
                {
                    productsData.map((data, index) => {
                        return (
                            <div className="container">
                                <CheckoutCard key={index} value={data} index={index} cart={cart} setCart={setCart} />
                            </div>
                        );
                    })
                }

            </div>
            <div >
                <div className="card mt-4" style={{ width: "18rem", position: "sticky", top: "90px" }}>
                    <div className="card-body">
                        <h5 style={{textAlign:"center"}} className="card-title">Total</h5>
                        <hr/>
                        {
                            cart.map((data, index) => {
                                return (
                                    <>
                                        <p className="card-text">{`${data.title} x ${data.count} =   ₹ ${data.price * data.count}`}</p>
                                    </>

                                )
                            })
                        }
                        <hr/>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <div> <p className="card-text">Total</p></div>
                            <div><p>:</p></div>
                            <div> <p className="card-text">₹{
                                cart.reduce((accum,current)=>accum + (current.count * current.price),0)
                            }</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;