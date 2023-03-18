import React, { useState } from 'react'
import { loginAction, registerAction } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'

const Auth = () => {

  const [signUp, setSignUp] = useState(true)
  const [authData, setAuthData] = useState({ username: "", email: "", password: "" })
  const dispatch =useDispatch()
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }

  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData))
    } else {
      dispatch(loginAction(authData))

    }

  }

  console.log("AuthData: ", authData)
  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
      <div className='w-1/3 bg-white p-3'>
        <h1 className='text-2xl text-indigo-300 font-bold'>{signUp ? "Register" : "Login"}</h1>
        <div className='flex flex-col space-y-3 my-5'>
          {signUp && <input type="text" value={authData.username} name="username" onChange={onChangeFunc} placeholder='Username' className='input-style' />}
          <input type="text" value={authData.email} name="email" onChange={onChangeFunc} placeholder='Email' className='input-style' />
          <input type="text" value={authData.password} name="password" onChange={onChangeFunc} placeholder='Password' className='input-style' />

        </div>
        <div className='text-red-400 text-xs cursor-pointer mb-4 ml-2 '>
          {
            signUp ? <span onClick={() => setSignUp(false)}>Daha önce giriş yaptınız mı?</span> : <span onClick={() => setSignUp(true)}>Kayıt olmak için tıklayınız.</span>
          }


        </div>
        <div onClick={authFunc} className='cursor-pointer hover:bg-indigo-800 w-full p-2 text-center bg-indigo-600 text-white rounded-md'>{signUp ? "Kayıt Ol" : "Giriş Yap"}</div>
      </div>
    </div>
  )
}

export default Auth
