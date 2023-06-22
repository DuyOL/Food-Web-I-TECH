let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})
// File JSON dùng để gọi thuộc tính Thực Đơn
let products = [
    {
        id: 1,
        name: 'Pizza Truyền thống',
        image: 'anh10.jpeg',
        price: 174000
    },
    {
        id: 2,
        name: 'Pizza Bò',
        image: 'anh8.jpg',
        price: 138000
    },
    {
        id: 3,
        name: 'Pizza Xúc Xích ',
        image: 'anh9.jpg',
        price: 149000
    },
    {
        id: 4,
        name: 'Pizza Chay',
        image: 'anh5.jpg',
        price: 228000
    },
    {
        id: 5,
        name: 'Pizza Mexico',
        image: 'anh4.jpg',
        price: 144000
    },
    {
        id: 6,
        name: 'Pizza Cà Chua',
        image: 'anh12.jpg',
        price: 144000
    },
    {
        id: 7,
        name: 'Pizza Tôm',
        image: 'anh13.jpg',
        price: 170000
    },
    {
        id: 8,
        name: 'Pizza Hải Sản',
        image: 'anh3.jpg',
        price: 138000
    },
    {
        id: 9,
        name: 'Mỳ Ý Truyền thống',
        image: 'anh14.jpg',
        price: 75000
    },
    {
        id: 10,
        name: 'Mì Ý Bò',
        image: 'anh10.jpg',
        price: 75000
    },
    {
        id: 11,
        name: 'Mì Ý Hải Sản',
        image: 'anh11.jpg',
        price: 75000
    },
    {
        id: 12,
        name: 'Mỳ Ý Hun Khói',
        image: 'anh14.png',
        price: 75000
    },
    {
        id: 13,
        name: 'Pessi 330ml',
        image: 'Pessis.jpg',
        price: 15000
    },
    {
        id: 14,
        name: 'CoCa 330ml',
        image: 'Coca.jpg',
        price: 15000
    },
    {
        id: 15,
        name: '7up 330ml',
        image: '7up.jpg',
        price: 15000
    },
    {
        id: 16,
        name: 'fanta 330ml',
        image: 'fanta.jpg',
        price: 15000
    },
    {
        id: 17,
        name: 'Combo 1',
        image: 'Combo1.jpg',
        price: 120000
    },
    {
        id: 18,
        name: 'Combo 2',
        image: 'Combo2.jpg',
        price: 180000
    },
    {
        id: 19,
        name: 'Combo 3',
        image: 'Combo3.jpg',
        price: 300000
    },
    {
        id: 20,
        name: 'Combo 4',
        image: 'Combo4.jpg',
        price: 440000
    },
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} VNĐ</div>
            <button onclick="addToCard(${key})">Thêm vào Giỏ Hàng</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // sao chép danh sách sản phẩm vào giỏ hàng
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button style="padding: 5px" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="padding: 5px"onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

