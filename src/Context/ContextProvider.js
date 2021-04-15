import React, { Component } from 'react'
import AppContext from './Context'
import App from '../App'
import Cart from '../Components/Cart'

export default class ContextProvider extends Component {

    constructor(props) {
        super(props)
        this.actions = {
            addItemToCart: this.addItemToCart,
            completeOrder: this.completeOrder,
            calculateCartTotal: this.calculateCartTotal,
            decreaseQuantity: this.decreaseQuantity,
            increaseQuantity: this.increaseQuantity,
            removeProduct: this.removeProduct,
            search: this.search,
        }

        this.state = {
            cart: [],
            products: [
                {
                    name: 'Camping Tent',
                    url: 'camping-tent',
                    description: 'Lightweight tent for overnight camping adventures',
                    image: 'https://images.unsplash.com/photo-1550957886-ac45931e5779?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                    price: '139.00'
                },
                {
                    name: 'KITH Hoodie',
                    url: 'kith-hoodie',
                    description: 'Love this hoodie',
                    image: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                    price: '235.62'
                },
                {
                    name: 'Fanorak',
                    url: 'fanorak',
                    description: 'Super hip. Comes in a number of colors',
                    image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1002&q=80',
                    price: '2,432.32'
                },
                {
                    name: 'Air Jordans',
                    url: 'air-jordans',
                    description: 'Kind of squeaky on some floors',
                    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                    price: '99.99'
                },
                {
                    name: 'Belt',
                    url: 'belt',
                    description: 'Keeps your pants up',
                    image: 'https://images.unsplash.com/photo-1553704571-c32d20e6c74f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    price: '32.34'
                },
                {
                    name: 'The Jean',
                    url: 'the-jean',
                    description: 'Looks good always',
                    image: 'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
                    price: '423.32'
                },
                {
                    name: 'Dazzle',
                    url: 'dazzle',
                    description: '6 inches taller',
                    image: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                    price: '82.83'
                },
                {
                    name: 'Cool Beanie',
                    url: 'cool-beanie',
                    description: 'Keeps the brain warm',
                    image: 'https://images.unsplash.com/photo-1490631537525-3b00d26805f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
                    price: '17.20'
                },
                {
                    name: 'Shades',
                    url: 'shades',
                    description: 'Protects the eyes from that unwanted UV',
                    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                    price: '199.97'
                },
                {
                    name: 'Goose',
                    url: 'goose',
                    description: 'Keep warm.',
                    image: 'https://images.unsplash.com/photo-1542088216-a7aed3b59586?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVyJTIwY29hdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    price: '142.74'
                },
                {
                    name: 'Ultraboost',
                    url: 'ultraboost',
                    description: 'blacked out',
                    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
                    price: '63.44'
                }
            ],
            filteredProducts: [],
            orders: []
        }
    }

    addItemToCart = (item, quantity = 1) => {
        if (this.state.cart.filter(product => product.name === item.name).length > 0) {
            let newCart = this.state.cart
            let productIndex
            for (let i = 0; i < newCart.length; i++) {
                if (newCart[ i ].name === item.name) {
                    productIndex = i
                    break
                }
            }
            newCart[ productIndex ] = {
                ...newCart[ productIndex ],
                quantity: newCart[productIndex].quantity + quantity
            }

            this.setState({
                ...this.state,
                cart: newCart
            })
        } else {
            let newCart = this.state.cart
            newCart.push({
                ...item,
                quantity: quantity
            })
            this.setState({
                ...this.state,
                cart: newCart
            })
        }
    }

    calculateCartTotal = () => {
        let total = 0
        for (let i = 0; i < this.state.cart.length; i++) {
            total += (parseFloat(this.state.cart[i].price) * this.state.cart[i].quantity)
        }

        return total
    }

    completeOrder = () => {
        let newOrders = this.state.orders
        newOrders.push({
            cart: this.state.cart,
            orderId: newOrders.length + 134238,
            orderDate: new Date()
        })

        this.setState({
            ...this.state,
            cart: [],
            orders: newOrders
        })
    }

    decreaseQuantity = (item) => {
        let newCart = this.state.cart
        let productIndex
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[ i ].name === item.name) {
                productIndex = i
                break
            }
        }

        newCart[ productIndex ] = {
            ...newCart[ productIndex ],
            quantity: newCart[productIndex].quantity - 1
        }

        if (newCart[ productIndex ].quantity < 1) {
            newCart.splice(productIndex, 1)
        }

        this.setState({
            ...this.state,
            cart: newCart
        })
    }

    increaseQuantity = (item) => {
        let newCart = this.state.cart
        let productIndex
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[ i ].name === item.name) {
                productIndex = i
                break
            }
        }

        newCart[ productIndex ] = {
            ...newCart[ productIndex ],
            quantity: newCart[productIndex].quantity + 1
        }

        this.setState({
            ...this.state,
            cart: newCart
        })
    }

    removeProduct = (product) => {
        let newCart = this.state.cart
        let productIndex
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[ i ].name === product.name) {
                productIndex = i
                break
            }
        }
        newCart.splice(productIndex, 1)
        this.setState({
            ...this.state,
            cart: newCart
        })
    }

    search = (query) => {
        if (query === '') {
            this.setState({
                ...this.state,
                filteredProducts: this.state.products
            })
        } else {
            this.setState({
                ...this.state,
                filteredProducts: this.state.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
            })
        }
    }

    render() {
        return (
            <AppContext.Provider value={{ ...this.state, ...this.actions }}>
                <App />
            </AppContext.Provider>
        )
    }
}
