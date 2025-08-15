import Link from 'next/link';

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}

const PostList = ({ posts }) => {
    return (
        <div>
            <h2>fetch data with getStaticProps (Static Site Generation or SSG)</h2>
            <ol>
                {
                    posts?.map(post => {
                        const { title, body, id } = post

                        return <li key={id} >
                            <h3>{title}</h3>
                            <p>{body}</p>
                            <Link href={`posts/${id}`} passHref >
                                more...
                            </Link>
                            <hr />
                        </li>
                    })
                }
            </ol>
        </div>
    )
}

export default PostList