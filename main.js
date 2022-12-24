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

const figCaption = document.querySelectorAll('figcaption')
const pro_info = document.createElement('p')
const price = document.createElement('p')

for(i=0; i < figCaption.length; i++){
    console.log(figCaption.length)
    figCaption[i].appendChild(pro_info)
    pro_info.textContent = products[0].info
    figCaption[i].appendChild(price)
    price.textContent = products[0].price
}