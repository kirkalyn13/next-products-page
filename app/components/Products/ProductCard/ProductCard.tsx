import { Product } from '@/app/types/product'
import Image from 'next/image'
import Link from 'next/link';


const ProductCard: React.FC<{ product: Product }> = ({product}) => {
  const { id, images, title, price, rating, stock, discountPercentage } = product
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={{
        pathname: `/products/${id}`
      }}>
        <Image 
          priority
          src={images[0]} 
          alt={title} 
          width={500}
          height={500}
          className="w-full h-48 object-cover object-center" 
        />
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
          <div className="w-100 flex justify-center align-center mt-2">
            <span className="text-xl text-black">${(price - price * (discountPercentage / 100)).toFixed(2)}</span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-500 ml-2 my-1 line-through">${price.toFixed(2)}</span>
            )}
          </div>
          <p className="text-gray-600 mt-2">
              <strong className="me-2">Rating:</strong> {rating}/5
          </p>
          <p className="text-gray-600">
              <strong className="me-2">Stock:</strong> {stock} units available
          </p>
          {/* <button className="mt-2 bg-black text-white py-2 px-4 rounded-full">Add to Cart</button> */}
        </div>
      </Link>
    </div>
  )
}

export default ProductCard