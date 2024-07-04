import React from 'react'
import Link from 'next/link'

async function getCategories(){
	const res = await fetch('https://fakestoreapi.com/products/categories');
	return res.json();
}

export default async function NavBar() {
	const categories = await getCategories();

	return (
		<nav className='navBar'>
			<Link href='/'>
				<h2 className='navTitle'>Shop<span className='blueText'>here</span></h2>
			</Link>
			<Link href='/' >Home</Link>
			<div className='dropdownMenu'>
				<a href="#">Categories</a>
				<ul className='dropdownItems'>
					{categories.map((cat) => {
						return (
							<li className='item' key={Math.random() * 100000}>
								<Link href={'/categories/' + cat}>
									{cat.slice(0,1).toUpperCase() + cat.slice(1)}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}
