const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.ID !==
    item.id)
const itemIncart = (cart, item) => cart.filter(cartItem => cartItem.ID !==
    item.id) [0]

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined
        ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
        : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity
        +1 }]
    }

const removeFromCart = (cart, item) => {
    return item.quantity === 1
    ? [ ...cartWithoutItem(cart, item) ]
    : [ ...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1}]
}

const removeAllFromCart = (cart, item) => {
    return [...cartWithoutItem(cart, item) ]  
}

const cartReducer = (state=[]. action) => {
    switch(action.type) {
        case 'ADD':
            return addToCard(state. action.payload)

            //add remove button
        case 'REMOVE':
            return removeFromCart(state, action.payload)
        
        case 'REMOVE_ALL':
            return removeAllFromCart(state, action.payload)

        default:
            return state;
    }
}

export default cartReducer