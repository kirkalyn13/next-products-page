import Image from 'next/image'
import { Product } from '@/app/types/product'
import ProductImages from './ProductImages/ProductImages'

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image 
            priority
            src={thumbnail} 
            alt={title}
            width={500}
            height={500}
            className="w-full h-auto object-cover object-center rounded" 
          />
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-600">{description}</p>
          <div className="flex items-center mt-2">
            <span className="text-xl text-black">${(price - price * (discountPercentage / 100)).toFixed(2)}</span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-500 ml-2 line-through">${price.toFixed(2)}</span>
            )}
          </div>
          <p className="text-gray-600 mt-2">
              <strong className="me-2">Rating:</strong> {rating}/5
          </p>
          <p className="text-gray-600">
              <strong className="me-2">Brand:</strong> {brand}
          </p>
          <p className="text-gray-600">
              <strong className="me-2">Category:</strong> {category}
          </p>
          <p className="text-gray-600">
              <strong className="me-2">Stock:</strong> {stock} units available
          </p>
        </div>
      </div>
      <ProductImages images={images} title={title} />
    </div>
  )
}

export default ProductDetails