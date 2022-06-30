import {createSlice} from "@reduxjs/toolkit";
const registerSlice = createSlice({
    name:'register',
    initialState:{
        singUpFullName:'',
        singUpEmail:'',
        singUpPassword:'',

        singInEmail:'',
        singInPassword:'',

        userAccount:null

    },
    reducers:{
        getUserAcc:(state,action) =>{
            state.userAccount = action.payload
        },
        getValueFullNameSingUp:(state,action)=>{
            state.singUpFullName = action.payload
        },
        getValueEmailSingUp: (state,action) => {
            state.singUpEmail = action.payload
        },
        getValuePasswordSingUp:(state,action)=>{
            state.singUpPassword = action.payload
        },
        getValueEmailSingIn:(state,action)=>{
            state.singInEmail = action.payload
        },
        getValuePasswordSingIn:(state,action) => {
            state.singInPassword = action.payload
        }
    }
})
export const getValueFullNameSingUpFunc = (event) => {
    return dispatch => {
        dispatch({
            type:registerSlice.actions.getValueFullNameSingUp.type,
            payload:event.target.value
        })
    }
}
export const getValueEmailSingUpFunc = (event) => {
    return dispatch => {
        dispatch({
            type:registerSlice.actions.getValueEmailSingUp.type,
            payload:event.target.value
        })
    }
}
export const getValuePasswordSingUpFunc = (event) => {
    return dispatch => {
        dispatch({
            type:registerSlice.actions.getValuePasswordSingUp.type,
            payload:event.target.value
        })
    }
}
export const getValueEmailSingIn = (event) => {
    return dispatch => {
        dispatch({
            type:registerSlice.actions.getValueEmailSingIn.type,
            payload:event.target.value
        })
    }
}
export const getValuePasswordSingIn = (event) => {
    return dispatch => {
        dispatch({
            type:registerSlice.actions.getValuePasswordSingIn.type,
            payload:event.target.value
        })
    }
}
export const getGoogleUser = (item) => {
    return dispatch => {
        dispatch({
            type:registerSlice.actions.getUserAcc.type,
            payload:item
        })
    }
}

export default registerSlice.reducer