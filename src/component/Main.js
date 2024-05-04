import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DATA } from "../config/DB";
import { useState } from "react";
import Products from "./Products";
import DetailProduct from "./DetailProduct";
import Checkout from "./Checkout";
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";

export const dataSet = createContext();

function Main() {
    const realData = DATA.products;
    const [cart, setCart] = useState([]);
    const naviGate = useNavigate();
    
    const handleAddProducts = (data) => {
        const dataExtract = data;
        const existingItem = cart.find((el) => el.id === data.id); 
        if (existingItem) {
            setCart((preData) => preData.map(
                (item) => item.id === existingItem.id ? { ...item, count: item.count++ } : item
            ))
        } else {
            setCart((preData) => [...preData,{...dataExtract,count: 1}]);
        }
    }

    const handleToNav = (data) =>{
        data.length !==0 ?  naviGate("/checkout") : console.log("add Product")
    }
    return (
        <dataSet.Provider value={{ realData, cart, setCart,handleAddProducts}}>
            <NavBar handleToNav={() => { handleToNav(cart) }} toAdd={cart} />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/add/:productid" element={<DetailProduct />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </dataSet.Provider>
    );
}

export default Main;