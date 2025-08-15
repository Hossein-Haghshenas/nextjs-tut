
export const getServerSidePaths = async () => {
    return {
        paths: [{ params: { newsId: '1' } }]
    }
}

export async function getServerSideProps({ params, req, res,query }) {
    const response = await fetch(`http://localhost:4500/news?category=${params.category}`)
    const data = await response.json()

    console.log(query);
    console.log(req.headers?.cookie)
    res.setHeader('set-Cookie', ['name=Hossein'])
    return {
        props: {
            articles: data,
            category: params.category
        },
    }
}

const ArticleListByCategory = ({ articles, category }) => {
    return (
        <div>
            <h1>Category : {category}</h1>
            <hr />
            <br />
            <section>
                {articles?.map((article) => {
                    return <section key={article.id} >
                        <h2>{article.title}</h2>
                        <b>{article.category}</b>
                        <p>{article.description}</p>
                    </section>
                })}
            </section>
        </div>
    )
}

export default ArticleListByCategory