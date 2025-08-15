import Link from 'next/link';

const Home = () => {

  return (
    <div>
      <h1>
        NextJs pre-rendering
      </h1>
      <h2>
        <Link href="/users" >
          users
        </Link>
      </h2>
      <h2>
        <Link href="/posts" >
          posts
        </Link>
      </h2>
      <h2>
        <Link href="/products" >
          products
        </Link>
      </h2>
      <h2>
        <Link href="/news" >
          news
        </Link>
      </h2>
      <h2>
        <Link href="/events" >
          events
        </Link>
      </h2>
    </div>
  )
}

export default Home