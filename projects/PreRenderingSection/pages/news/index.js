import Link from "next/link"

export async function getServerSideProps() {
    const res = await fetch("http://localhost:4500/news")
    const data = await res.json()
    return {
        props: {
            news: data
        },
    }
}

const NewsArticleList = ({ news }) => {
    return (
        <div>
            <h1>NewsArticleList</h1>
            <div>
                {
                    news.map(article => {
                        return (
                            <div key={article.id} >
                                <Link href={`news/${article.category}`} passHref >
                                    <h2>{article.id} {article.title} {article.category}</h2>
                                </Link>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewsArticleList