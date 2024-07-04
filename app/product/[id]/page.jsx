import React from 'react'

async function getProduct(id){
	const res = await fetch("https://fakestoreapi.com/products/" + id);
	return res.json();
}

export default async function ProductPage({params}) {
    const product = await getProduct(params.id);

    return (
        <div className='productPage'>
            <img src={product.image} alt="Product Image" />
            <div className='productPageContent'>
                <h1>{product.title}</h1>
                <div className='priceDiv'>
                    <p>{product.rating.rate}/5</p>
                    <p>${product.price}</p>
                </div>
                <p>{product.description}</p>
                <button className='buyBtn'>Buy</button>                
            </div>
        </div>
    )
}
