import React from 'react'
import Link from 'next/link'
import ProductPreview from '@/app/components/ProductPreview';

async function getCategory(cat){
    const res = await fetch("https://fakestoreapi.com/products/category/" + cat);
    return res.json();
}

export default async function CategoryPage({params}) {
    let category = params.cat;
    category = category.replace("%20", " ");

    const products = await getCategory(category);

    category = category.slice(0, 1).toUpperCase() + category.slice(1);

    return (
        <div>
            <h1 className='pageTitle'>{category}</h1>

            <div className="productContainer">				
				{products.map(pr => {
					return (
						<Link href={'/product/' + pr.id}>
							<ProductPreview key={pr.id} data={pr}/>
						</Link>
					)
				})}
			</div>

        </div>
    )
}
