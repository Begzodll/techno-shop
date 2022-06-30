import {connect} from "react-redux";
import {getProductFunc, getValueSearchFunc} from "../store/Reducer/productSlice";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useEffect} from "react";

const MoreProduct = ({product, getProductFunc}) => {
    const match = useParams()
    const navigator = useNavigate()

    useEffect(() => {
        getProductFunc()
    }, [])


    return (
        <div className={'h-screen bg-[#0F172A] '}>
            <div className={'mx-auto px-4 py-10 md:px-12 bg-[#0F172A]'}>
                <div className={'max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 '}>
                    <div className={'flex justify-center items-center mt-10'}>

                        {
                            product.filter(item => item.id == match.id)
                                .map((item, index) => (
                                    <div className={'bg-slate-700 w-full h-auto md:p-3 rounded'} key={index}>
                                        <div className={'flex flex-wrap'}>
                                            <div className={'w-1/2'}>
                                                <div className="grid grid-cols-6 p-5">
                                                    <div className={'col-span-6'}>
                                                        <img src={item.thumbnail} className={'rounded w-full'}/>
                                                    </div>
                                                    <div className={'flex col-span-6 gap-4 mt-5 '}>
                                                        {
                                                            item.images.map((item, index) => (
                                                                <div key={index} className={''}>
                                                                    <img src={item} alt="img"
                                                                         className={'w-full h-28 rounded'}/>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'py-5 w-1/2'}>
                                                <h1 className={'text-5xl text-gray-400'}>{item.title}</h1>
                                                <p className={'text-gray-500 my-4 text-2xl'}><span className={'text-gray-400'}>Rating:</span>
                                                    {'  '}{item.rating}
                                                </p>
                                                <p className={'my-4 text-gray-400'}>
                                                    <span className={'uppercase text-gray-500'}>Description:</span>{'  '}
                                                    {item.description}
                                                </p>
                                                <Link to={`/product`}
                                                      className="bg-blue-800 hover:bg-blue-900 text-white font-bold my-2 py-1 px-16 rounded-full">
                                                    Back
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((
    {
        productSlice: {
            product
        }
    }) => ({
    product
}), {
    getProductFunc,
    getValueSearchFunc
})(MoreProduct)