import React from 'react'
import Head from 'next/head';

const Blog = ({ title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <h1>Blog</h1>
            <p>Env Analytics : {process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
        </>
    )
}

export default Blog

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { blogId: '1' } }],
        fallback: false
    }
}

export const getStaticProps = async () => {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log(`connected to DataBase with username ${user} and password ${password}`)

    return {
        props: {
            title: 'Article Title',
            description: 'Article description'
        }
    }
}