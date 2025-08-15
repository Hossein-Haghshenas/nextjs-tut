import { useState } from 'react';
import Link from 'next/link';

const CommentsPage = () => {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    const fetchComments = async () => {
        const res = await fetch("/api/comments")
        const data = await res.json()
        setComments(data)
    }

    const submitComment = async () => {
        const newReq = {
            method: 'POST',
            body: JSON.stringify({ comment: newComment }),
            headers: {
                "Content-Type": 'application/json'
            }
        }
        const res = await fetch("/api/comments", newReq)
        const data = await res.json()
        setComments([...comments, data])
    }

    const deleteComment = async (commentId) => {
        const res = await fetch(`/api/comments/${commentId}`, { method: 'DELETE' })
        fetchComments()
    }

    return (
        <>
            {/* create new comment */}
            <section>
                <h3>Create New Comment</h3>
                <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)} />
                <button onClick={submitComment} >Submit comment</button>
            </section>

            <hr />
            {/* comments list */}
            <section>
                <button onClick={fetchComments} >
                    Load comments
                </button>
                <section>
                    {comments?.map(comment => {
                        return (
                            <section key={comment.id} >
                                <p>{comment.id}. <Link href={`/comments/${comment.id}`} >{comment.text}</Link> </p>
                                <button onClick={() => deleteComment(comment.id)} >Delete</button>
                            </section>
                        )
                    })}
                </section>
            </section>
        </>
    )
}

export default CommentsPage