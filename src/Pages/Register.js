import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import firebase from "../Components/firebase";
import {signInWithGoogle,signInAccount,createUserAccount} from "../Components/firebase";
import {connect} from "react-redux";

import SingUp from "../Components/SingUp";
import SingIn from "../Components/SingIn";

import {
    getGoogleUser,
    getValueEmailSingIn,
    getValueEmailSingUpFunc,
    getValueFullNameSingUpFunc, getValuePasswordSingIn,
    getValuePasswordSingUpFunc
} from "../store/Reducer/registerSlice";
import {toast} from "react-toastify";

const Register = (
    {
        userAccount,
        singUpFullName, singUpEmail, singUpPassword,
        singInEmail, singInPassword,
        getValueEmailSingUpFunc,
        getValueFullNameSingUpFunc,
        getValuePasswordSingUpFunc,
        getValueEmailSingIn,
        getValuePasswordSingIn,
        getGoogleUser
    }) => {

    const [toggle, setToggle] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            getGoogleUser(user)
        })
    }, [getGoogleUser])

    const handle = () => setToggle(p => !p)

    const PostData = () => {
        if ( singUpFullName !== "" &&
            singUpEmail !== "" &&
            singUpPassword !== "" &&
            singUpPassword.length > 7) {
            toast.success('Your account created successfuly')
            createUserAccount(singUpEmail, singUpPassword)
                .then(() => navigate('/'))
                .catch(() => toast.error('This account had been taken'))
        } else if (singUpPassword.length < 7) {
            toast.error('Password should be minimum 8')
        } else {
            toast.error('You have to complete all inputs')
        }
    }

    const CheckSingIn = () => {
        signInAccount(singInEmail, singInPassword)
            .then(() => {
                navigate('/')
            }).catch(() => toast.error("Check your password or email"))
    }

    const signInWithGoogleAccount = () => {
        signInWithGoogle()
            .then(()=>{
                navigate('/')
                toast.success('Your account created successfuly')
            }).catch( ()=> toast.error('check your connection') )
    }

    return (
        <div className={'w-full h-screen bg-[#0F172A] py-10'}>
            {
                toggle ?  <SingUp
                    handler={handle}
                    fullName={singUpFullName}
                    email={singUpEmail}
                    password={singUpPassword}

                    setName={getValueFullNameSingUpFunc}
                    setEmail={getValueEmailSingUpFunc}
                    setPassword={getValuePasswordSingUpFunc}

                    post={PostData}
                    enterGoogle={signInWithGoogleAccount}

                /> :  <SingIn
                    handler={handle}
                    email={singInEmail}
                    password={singInPassword}
                    setEmail={getValueEmailSingIn}
                    setPassword={getValuePasswordSingIn}

                    check={CheckSingIn}
                    enterGoogle={signInWithGoogleAccount}
                />

            }
        </div>
    )
}
export default connect((
        {
            register: {
                userAccount,singUpFullName, singUpEmail, singUpPassword, singInEmail, singInPassword
            }
        }) =>
        ({userAccount,singUpFullName, singUpEmail, singUpPassword, singInEmail, singInPassword}),
    {
        getValueFullNameSingUpFunc,
        getValueEmailSingUpFunc,
        getValuePasswordSingUpFunc,
        getValueEmailSingIn,
        getValuePasswordSingIn,
        getGoogleUser
    })(Register)