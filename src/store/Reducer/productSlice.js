import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../actions";

const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[],
        linkValue:[],
        searchValue:'',
        category:'',
        searchGadget:'',
    },
    reducers:{
      getProduct:(state,action) => {
          state.product = action.payload.products
      },
      getValueSearch:(state,action) => {
          state.searchValue = action.payload
      },
      getValueCategory:(state,action)=>{
          state.category = action.payload
      },
      getValueGadget:(state,action) =>{
          state.searchGadget = action.payload
      },
      linkValueState:(state,action) => {
          state.linkValue = action.payload
      }
    }
})
export const getProductFunc = () => apiCall({
    url:'/api/product/',
    method:'GET',
    onSuccess:productSlice.actions.getProduct.type
})
export const getValueSearchFunc = (event) => {
    return dispatch => {
        dispatch({
            type: productSlice.actions.getValueSearch.type,
            payload: event.target.value
        })
    }
}
export const getValueCategory = (event) => {
    return dispatch => {
        dispatch({
            type: productSlice.actions.getValueCategory.type,
            payload: event.target.value
        })
    }
}
export const getValueGadget = (event) => {
    return dispatch => {
        dispatch({
            type: productSlice.actions.getValueGadget.type,
            payload: event.target.value
        })
    }
}
export default productSlice.reducer