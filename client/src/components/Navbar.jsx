import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch =useDispatch();
    const logoutFunc = () => {
        localStorage.clear();
        window.location="/auth"
    }

    const openModal = () => {
        dispatch({type:'MODAL', payload: true})
    }


    return (
        <div className='h-20 bg-indigo-500 flex items-center justify-between px-5'>
            <div className='text-white fomt-bold text-2xl cursor-pointer'>POST PAYLAŞ</div>
            <div className='flex items-center space-x-5'>
                <div><input type="text" placeholder='Ara' className='p-2 outline-none rounded-md' /></div>
                <div onClick={openModal} className='w-36 border border-indigo-800 p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-700'>Post Oluştur</div>
                <BiLogOut onClick={logoutFunc} size={25} className='text-white cursor-pointer'/>

            </div>

        </div>
    )
}

export default Navbar
