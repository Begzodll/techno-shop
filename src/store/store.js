import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import productSlice from "./Reducer/productSlice";
import register from "./Reducer/registerSlice";
import api from "./middleware/apiProduct";
export default configureStore({
    reducer:{
        productSlice,
        register
    },
    middleware:[
        api,
        thunkMiddleware
    ]
})