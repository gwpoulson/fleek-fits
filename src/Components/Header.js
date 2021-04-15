import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/Context'

export default function Header() {

    const links = [
        { name: 'Products', target: '/' },
        { name: 'Orders', target: '/orders' },
        { name: 'Account', target: '/account' },
        { name: 'Sign Out', target: '/signout' },
        { name: 'My Cart', target: '/cart' },
    ]

    const context = useContext(AppContext)

    return (
        <header>
            <div className='pl-6 border-b-10 border-black flex flex-col items-center xl:flex-row xl:items-stretch'>
                <h1 className='my-7 bg-fleek text-white inline-block p-2 uppercase text-4.5xl transform -skew-x-7'>
                    <Link className='hover:underline' to='/'>Fleek Fits</Link>
                </h1>
                <nav className='my-4 flex-1 flex flex-wrap xl:my-0 justify-center xl:justify-end'>
                    {links.map(link => (
                        <Link key={link.name} to={link.target} className='relative group px-4 text-sm uppercase flex-shrink-0 flex items-center lg:text-lg lg:px-6 xl:px-8 xl:text-xl'>
                            <span className='absolute top-0 left-0 w-0.5 h-full bg-gray-200 transform -skew-x-20'></span>
                            <span className='relative'>
                                {link.name === 'My Cart' ? (
                                    <span className='flex items-center space-x-2'>
                                        <span>{link.name}</span>
                                        <span className='bg-fleek text-white h-7 w-7 text-sm rounded-full flex items-center justify-center'>{context.cart.length}</span>
                                    </span>
                                ) : (
                                    link.name
                                )}
                                <span className='absolute w-full h-1 bg-fleek -bottom-1 left-0 rounded-sm transform scale-x-0 group-hover:scale-x-100 transition ease-bloop duration-400'></span>
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
