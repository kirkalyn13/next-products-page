import { Product } from '@/app/types/product'

import ProductCard from './ProductCard/ProductCard'

const Products: React.FC<{ products: Product[] }> = ({ products = [] }) => {
  return (
    <section 
    className="container mx-auto my-8 grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {products.map((product: Product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          />
      ))}
    </section>
  )
}

export default Products