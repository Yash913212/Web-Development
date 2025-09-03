var cards = [{
        image: "../Html/panda.jpg",
        brand: "Killer",
        price: "2000",
    },
    {
        image: "../Html/panda.jpg",
        brand: "Killer",
        price: "2000",
    },
    {
        image: "../Html/panda.jpg",
        brand: "Killer",
        price: "2000",
    },
    {
        image: "../Html/panda.jpg",
        brand: "Killer",
        price: "2000",
    }
];

var card = cards.map((ele) => {
    return `
    <div class="card">
            <div class="image">
                <img src="${ele.image}" />
            </div>

            <div class="section">
                <div class="brand">Brand : ${ele.brand}</div>
                <div class="price">Price : ${ele.price}/-</div>
            </div>
         </div>`
})

card = card.join(" ");
var cards = document.getElementsByClassName('pt-cards')[0]
cards.innerHTML = card;