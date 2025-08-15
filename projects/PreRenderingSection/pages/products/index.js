import React from 'react'
import Link from 'next/link';

const ProductList = ({ products }) => {
    return (
        <div>
            <h1>List of products</h1>
            <div>
                {
                    products.map(product => {
                        return (
                            <div key={product.id} >
                                <Link href={`products/${product.id}`} passHref >
                                    <h2>{product.id} {product.title} {product.price}</h2>
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

export default ProductList

// 👉 Incremental Static Regeneration
// There was a need to update only those pages which needed a change without having to rebuild the entire app
// Incremental Static Regeneration (ISR)
// With ISR, Next.js allows you to update static pages after you've built your application
// you can statically generate individual pages without needing to rebuild the entire site, effectively solving the issus of dealing with stale data
// 👌 How?
// In the getStaticProps function, apart from the props key , we can specify a revalidate key
// The value for revalidate is the number of seconds after which a page re-generation can occur

// 👉 Re-generation
// 1. A re-generation is initiated only if a user makes a request after the revalidate time
// 2. if a user visits our product details page but there is no other user hitting that page the entire day, the re-generation does not happen
// 3. revalidate does not mean the page automatically re-generates every 10 seconds
// 4. It simply denotes the time after which, if a user makes a request, a re-generation has to be initiated
// 5. The re-generation can also fail and the previously cached HTML could be served till the subsequent re-generations succeed

export async function getStaticProps() {
    const res = await fetch("http://localhost:4500/products")
    const data = await res.json()
    console.log("Generating / Regenerating ProductList")
    return {
        props: {
            products: data
        },
        revalidate: 30
    }
}