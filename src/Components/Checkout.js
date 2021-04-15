import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import AppContext from '../Context/Context'

export default function Checkout() {

    const context = useContext(AppContext)

    const history = useHistory()

    const [ shipAddress, setShipAddress ] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    })

    const [ billAddress, setBillAddress ] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    })

    const [ paymentInfo, setPaymentInfo ] = useState({
        nameOnCard: '',
        cardNumber: '',
        expDate: '',
        ccv: ''
    })

    const [ errorMessages, setErrorMessages ] = useState([])
    
    const [ billingSameAsShipping, setBillingSameAsShipping ] = useState(true)
    
    const checkout = () => {

        let errors = []
        Object.values(shipAddress).forEach(value => {
            if (value === '') {
                errors = ['Please complete all the fields']
            }
        })

        if (!billingSameAsShipping) {
            Object.values(billAddress).forEach(value => {
                if (value === '') {
                    errors = ['Please complete all the fields']
                }
            })
        }

        Object.values(paymentInfo).forEach(value => {
            if (value === '') {
                errors = ['Please complete all the fields']
            }
        })

        if (errors.length < 1) {
            context.completeOrder()
            history.push('/orders')
        } else {
            setErrorMessages(errors)
        }

    }

    return (
        <div className='max-w-3xl lg:max-w-1000 mx-auto p-6 space-y-12'>
            <div className='shadow-lg p-8 rounded-lg border'>
                <div className='flex flex-wrap items-center justify-center space-y-5 space-x-5 md:space-y-0 md:justify-between'>
                    <h2 className='text-4xl text-white bg-fleek py-2 px-4 transform -skew-x-7'>Order Checkout</h2>
                    <h3 className='text-3xl'>Total: ${context.calculateCartTotal().toFixed(2)}</h3>
                </div>
                <ul className='text-red-600'>
                    {errorMessages.map(message => (
                        <li className='mt-4' key={message}>{ message }</li>
                    ))}
                </ul>
            </div>
            <div className='grid lg:grid-cols-2 gap-12'>
                <div className='shadow-lg p-8 rounded-lg border border-red-100'>
                    <h3 className='text-center text-3xl'>Shipping Address</h3>
                    <div className='grid grid-cols-2 gap-6 mt-4'>
                        <input className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' value={shipAddress.firstName} onChange={(e) => setShipAddress({ ...shipAddress, firstName: e.target.value })} placeholder='First Name' />
                        <input className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' value={shipAddress.lastName} onChange={(e) => setShipAddress({ ...shipAddress, lastName: e.target.value })} placeholder='Last Name' />
                        <input className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded col-span-2' value={shipAddress.address1} onChange={(e) => setShipAddress({ ...shipAddress, address1: e.target.value })} placeholder='Address Line 1' />
                        <input className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded col-span-2' value={shipAddress.address2} onChange={(e) => setShipAddress({ ...shipAddress, address2: e.target.value })} placeholder='Address Line 2' />
                        <input className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded col-span-2' value={shipAddress.city} onChange={(e) => setShipAddress({ ...shipAddress, city: e.target.value })} placeholder='City' />
                        <input className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' value={shipAddress.state} onChange={(e) => setShipAddress({ ...shipAddress, state: e.target.value })} placeholder='State' />
                        <input className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' value={shipAddress.zip} onChange={(e) => setShipAddress({ ...shipAddress, zip: e.target.value })} placeholder='Postal Code' />
                        <div className='col-span-2 space-x-4'>
                            <input checked={billingSameAsShipping} onChange={(e) => setBillingSameAsShipping(e.target.checked)} type='checkbox' />
                            <span>Billing address same as shipping?</span>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-8 rounded-lg border border-gray-100'>
                    <h3 className='text-center text-3xl'>Billing Address</h3>
                    <div className='grid md:grid-cols-2 gap-6 mt-4'>
                        <input disabled={billingSameAsShipping} className={`p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded ${billingSameAsShipping ? 'bg-gray-100': ''}`} value={billAddress.firstName} onChange={(e) => setBillAddress({ ...billAddress, firstName: e.target.value })} placeholder='First Name' />
                        <input disabled={billingSameAsShipping} className={`p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded ${billingSameAsShipping ? 'bg-gray-100': ''}`} value={billAddress.lastName} onChange={(e) => setBillAddress({ ...billAddress, lastName: e.target.value })} placeholder='Last Name' />
                        <input disabled={billingSameAsShipping} className={`p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek col-span-2 rounded ${billingSameAsShipping ? 'bg-gray-100': ''}`} value={billAddress.address1} onChange={(e) => setBillAddress({ ...billAddress, address1: e.target.value })} placeholder='Address Line 1' />
                        <input disabled={billingSameAsShipping} className={`p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek col-span-2 rounded ${billingSameAsShipping ? 'bg-gray-100': ''}`} value={billAddress.address2} onChange={(e) => setBillAddress({ ...billAddress, address2: e.target.value })} placeholder='Address Line 2' />
                        <input disabled={billingSameAsShipping} className={`p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek col-span-2 rounded ${billingSameAsShipping ? 'bg-gray-100': ''}`} value={billAddress.city} onChange={(e) => setBillAddress({ ...billAddress, city: e.target.value })} placeholder='City' />
                        <input disabled={billingSameAsShipping} className={`p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded ${billingSameAsShipping ? 'bg-gray-100': ''}`} value={billAddress.state} onChange={(e) => setBillAddress({ ...billAddress, state: e.target.value })} placeholder='State' />
                        <input disabled={billingSameAsShipping} className={`p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded ${billingSameAsShipping ? 'bg-gray-100': ''}`} value={billAddress.zip} onChange={(e) => setBillAddress({ ...billAddress, zip: e.target.value })} placeholder='Postal Code' />
                    </div>
                </div>
            </div>
            <div className='shadow-lg p-8 rounded-lg border border-gray-100'>
                <h3 className='text-3xl text-center'>Payment Information</h3>
                <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-4 mt-4'>
                    <input onChange={(e) => setPaymentInfo({...paymentInfo, nameOnCard: e.target.value})} value={paymentInfo.nameOnCard} className='p-2 col-span-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' placeholder='Name on Card' />
                    <input onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})} value={paymentInfo.cardNumber} className='p-2 col-span-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' placeholder='Card Number' />
                    <input onChange={(e) => setPaymentInfo({...paymentInfo, expDate: e.target.value})} value={paymentInfo.expDate} className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' placeholder='Expiration Date' />
                    <input onChange={(e) => setPaymentInfo({...paymentInfo, ccv: e.target.value})} value={paymentInfo.ccv} className='p-2 ring ring-gray-300 focus:ring focus:outline-none focus:ring-fleek rounded' placeholder='CCV' />
                    <div className='col-span-2 flex items-center justify-center'>
                        <button onClick={checkout} className='uppercase flex-1 bg-green-500 text-white rounded-lg py-2 px-4 text-2xl'>Complete Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
