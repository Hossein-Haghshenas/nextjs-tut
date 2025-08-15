import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(`http://localhost:4500/products/${params.productId}`)
  const data = await response.json()

  console.log(`Regeneration product${params.productId}`);

  return {
    props: {
      product: data
    },
    revalidate: 10,
  }
}

const ProductDetails = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product?.id} : {product?.title} {product?.price}</h2>
      <p>{product?.description}</p>
    </div>
  )
}

export default ProductDetails