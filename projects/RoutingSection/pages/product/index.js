import Link from 'next/link';

const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/" >
        <h2>Home</h2>
      </Link>
      <Link href="/product/1" >
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/2" >
        <h2>Product 2</h2>
      </Link>

      {/* replace prop : Replace the current history state instead of adding a new url into the stack.
       Defaults to false */}

      <Link href="/product/3" replace >
        <h2>Product 3</h2>
      </Link>
      <Link href={`/product/${productId}`} >
        <h2>Product {productId}</h2>
      </Link>
    </>
  )
}

export default ProductList