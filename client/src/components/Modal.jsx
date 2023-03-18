import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { createPostAction,updatePostAction } from '../redux/actions/post'

const Modal = () => {

  const [postData, setPostData] = useState({ user: "", title: "", description: "" })
  const dispacth = useDispatch();
  const { modal } = useSelector(state => state.modal)

  console.log("Modal: " + modal)
  const closeModal = () => {
    dispacth({ type: 'MODAL', payload: false })
  }

  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const createPost = () => {
    if(modal?.updateId){
      dispacth(updatePostAction(modal?.updateId, postData))
    } else{
      dispacth(createPostAction(postData))
    }
    dispacth({ type: 'MODAL', payload: false })
    toast("Ekleme işlemi başarılı", {
      position: "top-right",
      autoClose: 5000,
    });
  }

  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
      <div className='bg-white w-1/3 p-2 rounded-md'>
        <div onClick={closeModal} className='flex items-center justify-between cursor-pointer'>
          <h1 className='font-bold text-2xl'>{modal?.updateId ? "POSTU GÜNCELLE":"POST PAYLAŞ"}</h1>
          <AiOutlineClose size={25} />
        </div>

        <div className='my-4 flex flex-col space-y-3'>
          <input value={postData.user} name="user" onChange={onChangeFunc} type="text" className='input-style' placeholder='User' />
          <input value={postData.title} name="title" onChange={onChangeFunc} type="text" className='input-style' placeholder='Title' />
          <input value={postData.description} name="description" onChange={onChangeFunc} type="text" className='input-style' placeholder='Description' />
        </div>
        <div onClick={createPost} className='w-full p-2 text-center bg-indigo-500 text-white cursor-pointer rounded-md hover:bg-indigo-700'  > {modal?.updateId ? "Güncelle":"Paylaş" }</div>
      </div>

    </div>
  )
}

export default Modal
