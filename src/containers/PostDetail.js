import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import CardPost from '../components/CardPost'

export default function PostDetail() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getPost(id))
    }, [dispatch, id])
    return (
        <>
            <CardPost post={post} />
        </>
    )
}