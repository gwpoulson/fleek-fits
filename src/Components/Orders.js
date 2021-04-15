import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/Context'

export default function Orders() {

    const context = useContext(AppContext)

    return (
        <div className='max-w-1000 mx-auto p-6'>
            {context.orders.length === 0 ? 
                <div className='shadow-lg border border-gray-100 p-6'>
                    <h2 className='text-3xl'>You have no orders</h2>
                    <Link to='/' className='hover:text-fleek'>Browse Products</Link>
                </div>
                :
                context.orders.reverse().map(order => (
                    <div className='flex flex-col flex-wrap shadow-lg border border-gray-100 p-6'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-3xl'>Order #{order.orderId}</h2>
                            <h2>{ order.orderDate.toString() }</h2>
                        </div>
                        <ul>
                            {order.cart.map(item => (
                                <li>{item.quantity} - {item.name} - ${(item.quantity * item.price).toFixed(2)}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
