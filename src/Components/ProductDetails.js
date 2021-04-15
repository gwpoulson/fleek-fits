import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AppContext from '../Context/Context'

export default function ProductDetails() {

    const context = useContext(AppContext)

    let { slug } = useParams()

    const [ product, setProduct ] = useState({
        name: '',
        url: '',
        description: '',
        image: '',
        price: ''
    })

    const [ quantity, setQuantity ] = useState(1)

    useEffect(() => {
        const product = context.products.filter(prod => prod.url === slug)[0]
        setProduct(product)
    }, [])

    return (
        <div className='max-w-1000 mx-auto shadow-lg p-6 mt-8'>
            <div className='flex space-x-8'>
                <img className='h-full w-52 lg:h-72 lg:w-72 object-cover' src={product.image} alt={product.name} />
                <div className='flex flex-col flex-1 space-y-4'>
                    <div className='text-center'>
                        <h2 className='text-2xl lg:text-4xl bg-fleek text-white inline-block py-2 px-4 transform -skew-x-7'>{product.name}</h2>
                    </div>
                    <p>
                        <span className='font-bold'>Description:</span> {product.description}
                    </p>
                    <div className='flex flex-col justify-end flex-1'>
                        <div className='flex flex-col flex-wrap justify-center md:flex-row space-x-10 lg:justify-between items-center'>
                            <h3 className='text-2xl lg:text-3xl'>${product.price}</h3>
                            <div className='flex items-center space-x-4'>
                                <span className='text-2xl lg:text-3xl'>Quantity: { quantity }</span>
                                <div className='flex flex-col space-y-2 mr-1'>
                                    <button onClick={() => setQuantity(quantity + 1)} className='bg-gray-200 p-1 rounded-full'>
                                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                    <button onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className='bg-gray-200 p-1 rounded-full'>
                                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => context.addItemToCart(product, quantity)} className='bg-fleek text-white py-2 px-4 uppercase rounded-lg'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
