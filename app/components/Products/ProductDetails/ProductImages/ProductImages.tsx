import { Product } from '@/app/types/product'
import Image from 'next/image'

interface ProductImagesProps {
    images: string[],
    title: string;
}

const ProductImages = ({images, title}: ProductImagesProps) => {
  return (
    <div className="mt-4">
        <h2 className="text-xl my-8 font-semibold text-gray-800">Product Images</h2>
        <div className="md:grid md:grid-cols-3 md:gap-4 mt-2 space-y-4 md:space-y-0">
          {images.map((image, index) => (
            <Image 
                key={index}
                src={image}
                alt={`${title}-image-${index}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover object-center rounded"
                 />
          ))}
        </div>
      </div>
  )
}

export default ProductImages