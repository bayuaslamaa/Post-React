import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deletePost } from '../store/actions'
import { useDispatch } from 'react-redux'

export default function CardPost(props) {
    const { post, button } = props
    const dispatch = useDispatch()
    return (
        <div className="container card-component">
            <Card>
                <Card.Header>{post.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {post.body}
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            Post {post.id} {button ? (<>
                                <Link to={`/posts/${post.id}`}><Button variant="success">Detail</Button></Link>
                                <Button onClick={() => dispatch(deletePost(post.id))} variant="warning">Delete</Button></>) : ''}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}