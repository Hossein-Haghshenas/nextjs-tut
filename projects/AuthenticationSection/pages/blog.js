import { getSession } from 'next-auth/react'

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
            data: session ? 'List of 100 personalized posts' : 'List of free posts'
        }
    }
}

const Blog = ({ data }) => {
    return (
        <div>
            <h1>Blog</h1>
            <p>{data}</p>
        </div>
    )
}

export default Blog