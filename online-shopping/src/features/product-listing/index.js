import React from 'react'
import ProuctListItem from './product-list-item'
import { connect } from 'react-redux'
import { cartWithoutItem } from '../cart';

function ProductListing(props) {
    return <div className='product-listing'>
        {
            props.products.map( product =>
                <ProuctListItem
                product={product} 
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                cartItem={props.cart.filer(cartItem => cartItem.id === product.id)}
                /> )

        }
            </div>
}

function mapStateToProps(state) {
    return{
        cart: state.cart
    }
}

function mapDispatchToProps(dipatch) {
    return{
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)
