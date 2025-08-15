import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter()

  const handleClick = () => {
    console.log("Placing your order");
    router.push('/product')
  }
  return (
    <div>
      <h1>home page</h1>
      <Link href="/blog" >
        Blog
      </Link>
      <Link href="/product" >
        Products
      </Link>
      <button onClick={handleClick} style={{ margin: "1rem" }} >
        Order Now
      </button>
    </div>
  )
}

export default Home