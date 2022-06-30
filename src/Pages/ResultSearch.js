import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const ResultSearch = ({searchGadget}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            baseURL: 'http://localhost:3001',
            url: `/api/product?name=${searchGadget}`,
            method: 'get',
        }).then(res => setData(res.data.products)
        ).catch(err => console.log(err))
    }, [])

    return (
        <div className={'h-screen bg-[#0F172A] '}>
            <div className={'mx-auto px-4 py-10 md:px-12 bg-[#0F172A]'}>
                <div className={'max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 '}>
                        {
                            data.map((item, index) => (
                                <div className={'bg-slate-700 w-full my-4 h-auto md:p-3 rounded'} key={index}>
                                    <div className={'flex'}>
                                        <div className={' md:w-1/2'}>
                                            <div className="grid grid-cols-6 p-5">
                                                <div className={'col-span-6'}>
                                                    <img src={item.thumbnail} className={'rounded w-full'} alt={'img'}/>
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
                                        <div className={' md:w-1/2 py-5'}>
                                            <ul className={'m-16'}>
                                                <li>
                                                    <strong className={'text-slate-500 uppercase text-2xl'}>Title: </strong>
                                                    <span className={'text-slate-400 uppercase text-2xl'}>{item.title}</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-500 uppercase text-2xl'}>Brand: </strong>
                                                    <span className={'text-slate-400 uppercase text-2xl'}>{item.brand}</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-500 uppercase text-2xl'}>Discount: </strong>
                                                    <span className={'text-slate-400 uppercase text-2xl'}>{item.discountPercentage}%</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-500 uppercase text-2xl'}>Price: </strong>
                                                    <span className={'text-slate-400 uppercase text-2xl'}>{item.price}</span>
                                                </li>
                                                <li>
                                                    <strong className={'text-slate-500 uppercase text-2xl'}>sold: </strong>
                                                    <span className={'text-slate-400 uppercase text-2xl'}>{item.stock}</span>
                                                </li>
                                                <div className={'mt-5'}>
                                                    <Link to={`/product/${item.id}`}
                                                          className="bg-blue-800 hover:bg-blue-900 text-white font-bold my-2 py-1 px-16 rounded-full">
                                                        More
                                                    </Link>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}
export default connect(({productSlice:{searchGadget}})=>({searchGadget}),null)(ResultSearch)