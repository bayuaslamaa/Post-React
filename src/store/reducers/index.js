import * as actions from '../actions/index'

const initialState = {
    posts: [],
    post: []
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case actions.SET_POSTS:
            return { ...state, posts: payload }
        case actions.SET_POST:
            return { ...state, post: payload }
        case actions.DELETE_POST:
            return { ...state, posts: state.posts.map(post => (post.id === payload) ? '' : post) }
        default:
            return state
    }
}