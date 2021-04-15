import React from 'react'

export default function Navigation() {
    return (
        <div className='text-center lg:text-left'>
            <div className='inline-flex border rounded-lg mt-4 divide-x text-sm'>
                <a className='px-7 py-4 pointer-events-none text-gray-500' href='/'>&larr; Prev</a>
                <p className='px-7 py-4 hidden sm:block'>Page 1 of 3</p>
                <p className='px-7 py-4 hidden sm:block'>11 items total</p>
                <a className='px-7 py-4 pointer-events-none text-gray-500' href='/'>Next &rarr;</a>
            </div>
        </div>
    )
}
