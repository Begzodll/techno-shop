import axios from "axios";
const apiProduct = ({dispatch})=>(next)=>(action)=>{

    if( action.type !== 'api/apiCall' ){
        next(action)
        return
    }

    next(action)

    const { url, method,data, onSuccess, onFail } = action.payload
    axios({
        baseURL:'http://localhost:3001',
        url,
        method,
        data
    }).then(res => {
        dispatch({
            type:onSuccess,
            payload:res.data
        })
    }).catch(err => {
        dispatch({
            type:onFail,
            payload:err.data
        })
    })
}
export default apiProduct
