import Link from "next/link";
import ProductPreview from "./components/ProductPreview";

async function getProducts(){
	const res = await fetch("https://fakestoreapi.com/products");
	return res.json();
}

export default async function Home() {
	const products = await getProducts();

	return (
		<main className="dashboard">
			<h1 className="pageTitle">Shop<span className="pageTitleSpan">here</span></h1>
			<h1 className="centerThis">All Products</h1>
			<div className="productContainer">				
				{products.map(pr => {
					return (
						<Link href={'/product/' + pr.id}>
							<ProductPreview key={pr.id} data={pr}/>
						</Link>
					)
				})}
			</div>
		</main>
	)
}
