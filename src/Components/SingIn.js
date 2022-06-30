const SingIn = ({email, password, setEmail, setPassword, handler,check,enterGoogle}) => {

    return (
        <div>
            <div
                className="md:w-1/2 mx-auto flex rounded items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-800">
                <div className="w-1/2 mx-auto space-y-8 py-5">
                    <div>
                        <img
                            className="mx-auto w-1/4 h-10 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-2xl text-white font-extrabold ">Sign in to your
                            account</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-slate-700 w-full py-2 px-4 rounded text-white border-none focus:outline-none"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e)}
                                />
                            </div>
                            <div>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="bg-slate-700 w-full py-2 px-4 rounded text-white border-none focus:outline-none my-4"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e)}
                                />
                            </div>
                        </div>
                    </form>
                    <div>
                        <button
                            onClick={check}
                            className="w-full px-5 py-2 text-white bg-blue-800 rounded"
                        >
                            Sign in
                        </button>
                        <div className={'text-center mt-5 text-white'}>
                            <button onClick={enterGoogle}> Enter with <span style={{color: '#6296ff'}}> Google</span></button>
                        </div>
                        <div className={'text-center mt-5 text-white'}>
                            <button onClick={handler}> I don't have an account <span
                                style={{color: '#6296ff'}}>Sing Up</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingIn