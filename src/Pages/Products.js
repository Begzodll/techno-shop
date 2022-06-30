import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getProductFunc, getProductSoupFunc, getValueCategory, getValueSearchFunc} from "../store/Reducer/productSlice";
import {Link} from "react-router-dom";
const Products = ({parfum,product,searchValue,category,getValueCategory,getValueSearchFunc,getProductFunc,getProductSoupFunc}) => {

    const [ page, setPage ] = useState(1);

    const onPrev = () => {
        setPage(prev => prev-1)
        if( page <= 1 ) setPage(1)
    }

    const onNext = () => {
        setPage(prev => prev+1)
        if( page >= 4 ) setPage(4)
    }

    useEffect(()=>{
        getProductFunc()
        getProductSoupFunc()

    },[])

        const mergeArray = [...product, ...parfum]

    return(
        <div className={'h-screen bg-[#0F172A]'}>
            <div className={'mx-auto px-4 py-10  md:px-12 bg-[#0F172A]'}>
                <div className={'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 '}>
                    <div className={'flex justify-between px-5'}>
                        <select className={'bg-slate-800  sm:w-1/3 rounded text-white py-2 px-4 '} onChange={(e)=>getValueSearchFunc(e)}>
                            <option value="">All</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptop">Laptop</option>
                            <option value="skincare">skincare</option>
                        </select>
                        <input type="search"
                               className={'focus:outline-none border-none rounded bg-slate-700 pr-15 px-5 sm:w-1/3 text-white'}
                               placeholder={'Search'}
                               onChange={(e)=>getValueCategory(e)}
                               value={category}
                        />
                    </div>
                    <div className={'flex flex-wrap'}>
                        {

                            mergeArray.filter(item => {
                                if (searchValue === '') {
                                    return item
                                } else if (item.title.includes(searchValue)) {
                                    return item
                                } else if (item.category.includes(searchValue)) {
                                    return item
                                }
                            }).filter(item => {
                                if (category === '') {
                                    return item
                                } else if (item.brand.includes(category)) {
                                    return item
                                } else if (item.title.includes(category)) {
                                    return item
                                }
                            })
                            //Pagination
                                .filter((item,index) => index >= (page-1)*3 && index<page*3)

                                .map( (item,index) =>
                                <div className={'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 w-full h-100'}  key={index}>
                                    <article className={'overflow-hidden rounded-lg shadow-lg bg-slate-800'} >
                                        <img src={item.thumbnail} className={'w-full m-0  h-56'} alt={'img'}/>
                                        <div className={'px-5 py-3'}>
                                            <div className={'font-bold text-slate-500 text-xl mb-2'}>
                                                {item.title}
                                            </div>
                                            <ul>
                                                <li>
                                                    <strong className={'text-slate-400'}>Category: </strong>
                                                    <span className={'text-slate-500'}>{item.category}</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-400'}>Brand: </strong>
                                                    <span className={'text-slate-500'}>{item.brand}</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-400'}>Discount: </strong>
                                                    <span className={'text-slate-500'}>{item.discountPercentage}%</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-400'}>Price: </strong>
                                                    <span className={'text-slate-500'}>{item.price}</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-400'}>sold: </strong>
                                                    <span className={'text-slate-500'}>{item.stock}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={'flex justify-center items-center'}>
                                            <Link to={`/product/${item.id}`}
                                                className="bg-blue-800 hover:bg-blue-900 text-white font-bold my-2 py-1 px-16 rounded-full">
                                                More
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            )
                        }
                    </div>
                    <div className={'flex justify-center items-center'}>
                        <button onClick={onPrev} className={'className="bg-blue-800 hover:bg-blue-900 text-white font-bold my-2 py-1 px-16 rounded-full"'}>{'<<'}</button>
                        <p className={'text-2xl text-white'}>{page}</p>
                        <button onClick={onNext} className={'className="bg-blue-800 hover:bg-blue-900 text-white font-bold my-2 py-1 px-16 rounded-full"'}>{'>>'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  connect((
    {
        productSlice: {
            product,
            parfum,
            searchValue,
            category
        }
    }) => ({
    product,
    parfum,
    searchValue,
    category
}), {
    getProductFunc,
    getValueSearchFunc,
    getValueCategory,
    getProductSoupFunc
})(Products)