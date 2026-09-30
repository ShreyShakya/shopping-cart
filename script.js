let products = [{ name: 'Laptop', price: 800 },
{ name: 'Mouse', price: 25 },
{ name: 'Keyboard', price: 50 },
{ name: 'Headphones', price: 100 }]


let cart = []

const divItems = document.querySelector("#div-items")
const cartView = document.querySelector("#cart")
const cartTotal = document.querySelector("#cart-total")

products.forEach((product) => {
    const productName = document.createElement('p')
    const productPrice = document.createElement('p')
    const cartBtn = document.createElement('button')

    productName.textContent = `Name: ${product.name}`
    productPrice.textContent = `Price: ${product.price}`
    cartBtn.textContent = '+ Add to cart'

    divItems.append(productName, productPrice, cartBtn)

    cartBtn.addEventListener("click", function () {
        cart.push(product)
        cartView.textContent = "Items in cart: "
        renderCart(cart)
        cartTotal.textContent = `Total Cost: ${renderCartTotal(cart)}`
    })

})

function renderCart(arr) {
    for (let i = 0; i < arr.length; i++) {
        const cartLi = document.createElement("p")
        const removeBtn = document.createElement('button')
        removeBtn.textContent = "X"
        let currentProduct = arr[i]

        removeBtn.addEventListener("click", function () {
            cartLi.remove()
            cart.splice(cart.indexOf(currentProduct), 1)
            removeBtn.remove()
            cartTotal.textContent = `Total Cost: ${renderCartTotal(cart)}`
        })

        cartLi.textContent = (`${arr[i].name} - ${arr[i].price}`)
        cartLi.append(removeBtn)
        cartView.append(cartLi)
    }
}

function renderCartTotal(arr) {
    return arr.reduce((total, object) => total + object.price, 0)
}


