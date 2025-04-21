import toast from "react-hot-toast";

export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if(favorites) return JSON.parse(favorites);
    return [];
}

export const addFavourite = phone => {
    const favorite = getFavorites();
    const isExist = favorite.find(p => p.id === phone.id)
    if(isExist) return toast.error('Phone is Already in bookmarked')
    favorite.push(phone)
    toast.success('Phone Added Successfully!!!')
    localStorage.setItem('favorites', JSON.stringify(favorite))
}

export const removeFavorite = id => {
    const favorites = getFavorites();
    const remainingFavorites = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
    toast.success('Phone Removed Successfully!!!')
}

export const getCart = () => {
    const cart = localStorage.getItem('cart');
    if(cart) return JSON.parse(cart);
    return [];
}

export const addCart = phone => {
    const cart = getCart();
    const isExist = cart.find(p => p.id === phone.id)
    if(isExist) return toast.error('Phone is Already added to Cart')
    cart.push(phone)
    toast.success('Phone Added Successfully in Cart!!!')
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeCart = id => {
    const cart = getCart();
    const remainingCartItem = cart.filter(phone => phone.id !== id)
    localStorage.setItem('cart', JSON.stringify(remainingCartItem))
    toast.success('Phone Removed Successfully from Cart!!!')
}