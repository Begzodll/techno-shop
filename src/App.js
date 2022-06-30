import React from "react";
import {Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ResultSearch from "./Pages/ResultSearch";
import MoreProduct from "./Components/MoreProduct";
import Register from "./Pages/Register";
const App = () => {
    return(
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={'product/:id'} element={<MoreProduct/>}/>
                    <Route path={'product'} element={<Products/>}/>
                    <Route path={'api/product/:name'} element={<ResultSearch/>}/>
                </Route>
            </Routes>
            <ToastContainer/>
        </div>
    )
}
export default App