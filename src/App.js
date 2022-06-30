import React from "react";
import {Routes, Route} from 'react-router-dom';
const MainLayout = React.lazy(()=>import('./Layout/MainLayout'));
const Home = React.lazy(()=>import('./Pages/Home'));
const Products = React.lazy(()=>import('./Pages/Products'));
const ResultSearch = React.lazy(()=>import('./Pages/ResultSearch'));
const MoreProduct = React.lazy(()=>import('./Components/MoreProduct'));
const Register = React.lazy(()=>import('./Pages/Register'));
import {ToastContainer} from "react-toastify";

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