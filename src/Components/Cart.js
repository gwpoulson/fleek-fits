import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/Context'

export default function Cart() {

    const context = useContext(AppContext)

    return (
        <div className='max-w-1000 mx-auto p-6 space-y-8'>
            {context.cart.map(item => (
                <div key={item.name} className='flex shadow-lg rounded-md border border-gray-100'>
                    <img className='h-52 w-52 object-cover rounded-md' src={item.image} alt={item.name} />
                    <div className='flex flex-col flex-1 p-4'>
                        <h3 className='text-center text-4xl'>{item.name}</h3>
                        <div className='flex flex-wrap space-y-4 flex-1 items-center justify-around'>
                            <p className='text-2xl'>${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                            <div className='flex flex-wrap flex-col items-center justify-between space-y-2'>
                                <p>Quantity: {item.quantity}</p>
                                <div className='flex space-x-3'>
                                    <button onClick={() => context.decreaseQuantity(item)} className='bg-gray-200 p-1 rounded-full'>
                                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <button onClick={() => context.increaseQuantity(item)} className='bg-gray-200 p-1 rounded-full'>
                                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => context.removeProduct(item)} className='bg-red-500 text-white px-4 py-2 rounded-lg uppercase'>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex flex-wrap shadow-lg rounded-md border border-gray-100 px-4 py-8'>
                {context.cart.length < 1 ?
                <p className='text-3xl'>You have no items in your cart</p>
                :
                <div className='flex items-center justify-around flex-1'>
                    <h3 className='text-xl md:text-3xl text-white bg-fleek py-2 px-4 transform -skew-x-7'>Total: ${context.calculateCartTotal().toFixed(2)}</h3>
                    <Link to='/checkout' className='bg-green-500 text-white text-lg md:text-2xl px-4 py-2 md:px-6 md:py-4 uppercase rounded-lg'>Proceed to Checkout</Link>
                </div>
                }
            </div>
        </div>
    )
}
