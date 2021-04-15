import React, { useContext } from 'react'
import Navigation from './Navigation'
import AppContext from '../Context/Context'
import Search from './Search'
import { Link } from 'react-router-dom'

export default function Products() {

    const context = useContext(AppContext)

    return (
        <React.Fragment>
            <Search />
            <main className='max-w-1000 mx-auto p-6 mb-4'>    
                <Navigation />

                <ul className='mt-5 grid lg:grid-cols-2 gap-16 my-2'>
                    {context.filteredProducts.map(product => (
                        <li className='shadow-bs relative border flex flex-col max-w-lg mx-auto rounded-lg' key={product.name}>
                            <p className='absolute -top-1 -right-1 bg-fleek text-white text-3xl font-semibold p-1.5 leading-none transform rotate-3'>${product.price}</p>
                            <img className='h-100 w-full object-cover rounded-t-lg' src={product.image} alt={product.name} />
                            <h2 className='-mt-8 text-center transform -skew-x-5 -rotate-1'>
                                <a href='/' className='text-shadow px-3 bg-fleek text-white text-4.5xl leading-tight hover:underline'>{product.name}</a>
                            </h2>
                            <p className='py-4 px-8 leading-8 flex-1'>{product.description}</p>
                            <div className='grid grid-cols-2 border-t divide-x'>
                                <Link to={`/product/${product.url}`} className='p-3 hover:bg-gray-100 text-center'>Details ℹ️</Link>
                                <button onClick={() => context.addItemToCart(product)} className='p-3 hover:bg-gray-100'>Add to Cart 🛒</button>
                            </div>
                        </li>
                    ))}
                </ul>

                <Navigation />

            </main>
        </React.Fragment>
    )
}
