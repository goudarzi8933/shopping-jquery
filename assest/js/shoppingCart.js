$(document).ready(function () {

    let removeCartItemButtons = $('.btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let countInputs = document.getElementsByClassName('cart-count-input')
    for (let i = 0; i < countInputs.length; i++) {
        let input = countInputs[i]
        input.addEventListener('change', countChanged)
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyClicked)
    // }

    function buyClicked() {
        alert('Thank you for your buy')
        let cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }

    function removeCartItem(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }

    function countChanged(event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }

    function addToCartClicked(event) {
        let button = event.target
        let shopItem = button.parentElement.parentElement
        let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        addItemToCart(title, price, imageSrc)
        updateCartTotal()
    }

    function addItemToCart(title, price, imageSrc) {
        let cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        let cartItems = document.getElementsByClassName('cart-items')[0]
        let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (let i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('This item is already added to the cart')
                return
            }
        }
        let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-count cart-column">
            <input class="cart-count-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-count-input')[0].addEventListener('change', countChanged)
    }

    function updateCartTotal() {
        let cartItemContainer = document.getElementsByClassName('cart-items')[0]
        let cartRows = cartItemContainer.getElementsByClassName('cart-row')
        let total = 0
        for (let i = 0; i < cartRows.length; i++) {
            let cartRow = cartRows[i]
            let priceElement = cartRow.getElementsByClassName('cart-price')[0]
            let countElement = cartRow.getElementsByClassName('cart-count-input')[0]
            let price = parseFloat(priceElement.innerText.replace('$', ''))
            let count = countElement.value
            total = total + (price * count)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }



})