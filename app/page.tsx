import Products from "./components/Products/Products";
import { getProductsWithSearch } from "./services/productService";

interface HomeProps {
  searchParams: Q;
}

interface Q {
  q: string;
}

export default async function Home({ searchParams: {q} }: HomeProps) {
  const { products } = await getProductsWithSearch(q)

  return (
    <main className="flex-grow w-100 text-center">
      <Products 
        products={products}
        />
    </main>
  )
}
