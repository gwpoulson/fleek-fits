import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import ProductDetails from './Components/ProductDetails'
import Orders from './Components/Orders'

export default function App() {
  return (
    <div className='font-quicksand'>
      <Router>
        <Header />
        <Switch>
          <Route path='/orders'>
            <Orders />
          </Route>
          <Route path='/product/:slug'>
            <ProductDetails />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/'>
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
