export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {

            //calculate item price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
            //calculate shipping price (if order is over 10000, shipping is free, else 1000 shipping fee)
            state.shippingPrice = addDecimals(state.itemsPrice > 10000 ? 0 : 1000);
            //calculate tax price (5%)
            state.taxPrice = addDecimals(Number((0.05 * state.itemsPrice).toFixed(2)));
            //calculate total price
            state.totalPrice = (Number(state.itemsPrice) + 
                                Number(state.shippingPrice) +
                                 Number(state.taxPrice)).toFixed(2);
            localStorage.setItem('cart', JSON.stringify(state));
        }