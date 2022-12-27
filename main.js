// const details = document.querySelector('details')
// const summary = document.querySelector('summary')
// const douImage = document.getElementsByClassName('dou')
// douImage.style.position = 'fixed'

// const nav = document.querySelector('nav') 

// summary.addEventListener(
//     'click',
//     nav.style.height = '25rem'
// )


const products = [
    {
        image: './media/sweet_item.jpeg',
        cartimg: './media/cart.png',
        info: 'Sweet item',
        price: '$5',
        category: 'Sweets'
    },
    {
        image: './media/cupcake_item.jpeg',
        cartimg: './media/cart.png',
        info: 'Cupcake item',
        price: '$5',
        category: 'Cupcakes'
    },
    {
        image: './media/cake_item.jpeg',
        cartimg: '',
        info: 'Cake item',
        price: '$5',
        category: 'Cakes'
    },
    {
        image: './media/doughnut_item.jpeg',
        cartimg: './media/cart.png',
        info: 'Doughnut item',
        price: '$5',
        category: 'Doughnuts'
    },
    {
        image: './media/sweet_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Sweet item',
        price: '$10',
        category: 'Sweets'
    },
    {
        image: './media/cupcake_item1.jpeg',
        cartimg: './media/cart.png',
        info: 'Cupcake item',
        price: '$10',
        category: 'Cupcakes'
    },
    {
        image: './media/cake_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Cake item',
        price: '$10',
        category: 'Cakes'
    },
    {
        image: './media/doughnut_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Doughnut item',
        price: '$10',
        category: 'Doughnuts'
    },
    {
        image: './media/sweet_item3.jpeg',
        cartimg: './media/cart.png',
        info: 'Sweet item',
        price: '$15',
        category: 'Sweets'
    },
    {
        image: './media/cupcake_item2.jpeg',
        cartimg: './media/cart.png',
        info: 'Cupcake item',
        price: '$15',
        category: 'Cupcakes'
    },
    {
        image: './media/cake_item3.jpeg',
        cartimg: './media/cart.png',
        info: 'Cake item',
        price: '$15',
        category: 'Cakes'
    },
    {
        image: './media/doughnut_item3.jpeg',
        cartimg: './media/cart.png',
        info: 'Doughnut item',
        price: '$15',
        category: 'Doughnuts'
    }
]

// selectors
const imageEl = document.querySelector('.p-img')
const cartEl = document.querySelector('.mvn_cart')
const figCaption = document.querySelector('figCaption')