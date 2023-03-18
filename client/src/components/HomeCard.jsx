import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { deletePostAction } from '../redux/actions/post'

const HomeCard = ({ post }) => {

    const dispacth = useDispatch()

    const updatePost = (id) => {
        dispacth({type:'MODAL', payload:{open:true, updateId: id }})
    }
    const deletePost = (id) => {
        dispacth(deletePostAction(id))
       // window.location.reload()
        toast("Silme işlemi başarılı.", {
            position: "top-right",
            autoClose: 5000,
        });
    }
    return (
        <div className='relative w-1/4 border m-3 p-3 rounded-md bg-gray-50'>
            <div className='font-bold text-xl'>{post?.title}</div>
            <div className='text-gray-700 text-sm'>{post?.description}</div>
            <div className='flex items-center justify-between mt-4'>
                <span className='text-xs text-gray-500' >{post?.user}</span>
                <span className='text-xs text-gray-500'>{(post?.date)?.substring(0, 10)}</span>
            </div>
            <div className='absolute -top-3 -right-3 flex items-center space-x-3'>
                <AiOutlineDelete onClick={() => deletePost(post._id)}  size={25} className="bg-red-400 rounded-full text-white p-1 cursor-pointer" />
                <GrUpdate onClick={() => updatePost(post._id)} size={25} className="bg-red-400 rounded-full text-white p-1 cursor-pointer" />
            </div>

        </div>
    )
}

export default HomeCard
