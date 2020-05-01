import React, { useEffect } from 'react'
import { getPosts } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import CardPost from '../components/CardPost'

export default function Post() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const button = true
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <div className="container card">
            {
                posts.map(post => (<CardPost key={post.id} post={post} button={button} />))
            }
        </div>
    )

}
