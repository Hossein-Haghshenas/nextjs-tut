import { comments } from '../../data/comments';

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { commentId: '1' } },
            { params: { commentId: '2' } },
            { params: { commentId: '3' } },
        ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const { commentId } = params
    const data = comments.find(comment => comment.id === parseInt(commentId))

    return {
        props: {
            comment: data
        }
    }
}

const CommentDetails = ({ comment }) => {
    return (
        <div>
            <h1>details page</h1>
            <p>{comment?.id}. {comment?.text}</p>
        </div>
    )
}

export default CommentDetails