const products = [
    {
        image: './media/sweet_item.jpeg',
        cartimg: './media/cart.png',
        info: 'Sweet item',
        price: '$ 5',
        category: 'Sweets'
    },
    {
        image: './media/cupcake_item.jpeg',
        cartimg: './media/cart.png',
        info: 'Cupcake item',
        price: '$ 5',
        category: 'Cupcakes'
    },
    {
        image: './media/cake_item.jpeg',
        cartimg: '',
        info: 'Cake item',
        price: '$ 5',
        category: 'Cakes'
    },
    {
        image: './media/doughnut_item.jpeg',
        cartimg: './media/cart.png',
        info: 'Doughnut item',
        price: '$ 5',
        category: 'Doughnuts'
    },
    {
        image: './media/sweet_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Sweet item',
        price: '$ 10',
        category: 'Sweets'
    },
    {
        image: './media/cupcake_item1.jpeg',
        cartimg: './media/cart.png',
        info: 'Cupcake item',
        price: '$ 10',
        category: 'Cupcakes'
    },
    {
        image: './media/cake_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Cake item',
        price: '$ 10',
        category: 'Cakes'
    },
    {
        image: './media/doughnut_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Doughnut item',
        price: '$ 10',
        category: 'Doughnuts'
    },
    {
        image: './media/sweet_item3.jpeg',
        cartimg: './media/cart.png',
        info: 'Sweet item',
        price: '$ 15',
        category: 'Sweets'
    },
    {
        image: './media/cupcake_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Cupcake item',
        price: '$ 15',
        category: 'Cupcakes'
    },
    {
        image: './media/cake_item3.jpeg',
        cartimg: './media/cart.png',
        info: 'Cake item',
        price: '$ 15',
        category: 'Cakes'
    },
    {
        image: './media/doughnut_item3.jpeg',
        cartimg: './media/cart.png',
        info: 'Doughnut item',
        price: '$ 15',
        category: 'Doughnuts'
    }
]

// selectors
const productEl = document.querySelector('.products')
for (let i = 0; i < products.length; i++){
    productEl.innerHTML+=`<div class="product">
    <div class="pics">
        <div class="over">
            <img class="p-img" src='${products[i].image}'>
        </div>
        <p class="mvn_cart"><img src='${products[i].cartimg}'></p>
    </div>
    <figcaption>
        <p class="info">${products[i].info}</p>
        <p class="price">${products[i].price}</p>
    </figcaption>
</div>`
}