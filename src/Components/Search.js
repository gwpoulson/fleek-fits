import React, { useContext, useEffect } from 'react'
import AppContext from '../Context/Context'

export default function Search() {

    const context = useContext(AppContext)

    useEffect(() => {
        context.search('')
    }, [])

    return (
        <input onChange={(e) => context.search(e.target.value)} className='w-full h-16 px-4 border-b-2 border-black focus:outline-none' type='text' placeholder='Search for an item...' />
    )
}
