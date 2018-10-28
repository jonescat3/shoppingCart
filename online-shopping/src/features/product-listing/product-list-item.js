import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProuctListItem(props) {
    return <div className='product-list-item'>
        <h3>{ props.name }</h3>
        <img
            height={100}
            title={ props.product.name }
            src={'/products/${props.product.image}'}
        />
        <div>{props.product.description }</div>
       <div>${ props.product.price }</div>
    <div>
      <AddBtn 
        cartItem={props.cartItem} 
        product={props.product} 
        addToCart={props.addToCard}
    />

    {
        props.cartItem
            ? <RemoveBtn 
                cartItem={props.cartItem} 
                product={props.product} 
                addToCart={props.addToCard}
                removeFromCart={props.removeFromCart}
            />
            : null
    }

        </div>
    </div>
}