import axios from 'axios'
import { toast } from 'react-toastify'


export const getPostsAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:8003/getPosts')

        dispatch({ type: 'GET_POSTS', payload: data })

    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });

    }
}

export const createPostAction = (postData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:8003/createPost', postData)

        dispatch({ type: 'CREATE_POST', payload: data })

    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });

    }
}

export const updatePostAction = (id, postData) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`http://localhost:8003/updatePost/${id}`, postData)

        dispatch({ type: 'UPDATE_POST', payload: data })

    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });

    }
}

export const deletePostAction = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`http://localhost:8003/deletePost/${id}`)

        dispatch({ type: 'DELETE_POST', payload: id})

    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });

    }
}



