import ProductDetails from '@/app/components/Products/ProductDetails/ProductDetails'
import { getProductByID } from '@/app/services/productService'


interface ProductPageProps {
    params: Q;
}

interface Q {
    id: string;
}

const ProductPage = async ({ params: {id}}: ProductPageProps) => {
    const product = await getProductByID(id)
    return (
        <section>
            <ProductDetails 
                product={product}
                />
        </section>
    )
}

export default ProductPage