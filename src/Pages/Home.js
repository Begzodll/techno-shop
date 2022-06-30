import styled from 'styled-components';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getValueGadget} from "../store/Reducer/productSlice";

const Section = styled.section`
  background-image: url('https://images.unsplash.com/photo-1621319332247-ce870cdad56c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FkZ2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80')
`
// window.location.href = "/"
function Home({searchGadget,getValueGadget}) {
    return (
        <div>
            <Section className="h-screen bg-cover">
                    <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
                        <div className="max-w-2xl text-center">
                            <h3 className="text-2xl sm:text-3xl capitalize tracking-widest text-white lg:text-5xl">
                                buy your dream gadget
                            </h3>

                            <p className="mt-6 lg:text-lg text-white">
                                In our market you can find whole contemporary things except head of horse.
                            </p>

                            <div
                                className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                                <input type="text"
                                       className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
                                       placeholder="Type here"
                                       onChange={(e)=>getValueGadget(e)}
                                       value={searchGadget}
                                />

                                <Link
                                    to={`api/product/${searchGadget}`}
                                    className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                                    Search
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
        </div>
    )
}

export default connect(({productSlice:{searchGadget}}) => ({searchGadget}), {getValueGadget})(Home)