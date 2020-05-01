import axios from 'axios'

export const SET_POSTS = 'SET_POSTS'
export const SET_POST = 'SET_POST'
export const DELETE_POST = 'DELETE_POST'




export const setPosts = (data) => {
    return { type: SET_POSTS, payload: data }
}

export const setPost = (datum) => {
    return { type: SET_POST, payload: datum }
}

export const deletePost = (id) => {
    return { type: DELETE_POST, payload: id }
}

function fetchPosts() {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    })
}

function fetchPostById(id) {
    return axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`
    })
}

export const getPosts = () => {
    return dispatch => {
        fetchPosts()
            .then(({ data }) => dispatch(setPosts(data)))
            .catch(console.log)
    }
}

export const getPost = (id) => {
    return dispatch => {
        fetchPostById(id)
            .then(({ data }) => dispatch(setPost(data)))
            .catch(console.log)
    }
}