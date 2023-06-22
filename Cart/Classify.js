let pizzaIcon = document.querySelector('.fa-pizza-slice');
let noodleIcon = document.querySelector('.bxs-bowl-hot');
let drinkIcon = document.querySelector('.bx-drink');
let comboIcon = document.querySelector('.fa-utensils');
pizzaIcon.addEventListener('click', () => {
    filterProducts([1, 2, 3, 4, 5, 6, 7, 8]);
});
noodleIcon.addEventListener('click', () => {
    filterProducts([9, 10, 11, 12]);
});
drinkIcon.addEventListener('click', () => {
    filterProducts([13, 14, 15, 16]);
});
comboIcon.addEventListener('click', () => {
    filterProducts([17, 18, 19, 20]);
});
function filterProducts(productIds) {
    let filteredProducts = products.filter((product) => {
        return productIds.includes(product.id);
    });
    renderProducts(filteredProducts);
}
function renderProducts(products) {
    list.innerHTML = '';
    products.forEach((value) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
      <img src="image/${value.image}">
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()} VNĐ</div>
      <button onclick="addToCard(${value.id})">Thêm vào Giỏ Hàng</button>`;
        list.appendChild(newDiv);
    });
}
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.icon-card').style.display = 'flex';
    document.querySelector('.shopping').style.display = 'block';
});
