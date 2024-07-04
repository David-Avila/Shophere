import React from 'react'

export default function ProductPreview({data}) {
return (
	<div className='productPreview'>
		<img src={data.image} alt="Product image" />
		<div className='productData'>
			<h3 className='productTitle'>{data.title}</h3>
			<p>${data.price}</p>
			<p>{data.rating.rate}/5</p>
		</div>
	</div>
)
}
