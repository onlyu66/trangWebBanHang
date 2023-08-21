let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
});
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
});

let products =  JSON.parse(localStorage.getItem("productLists")) || [
    {
        id: 1,
        name: 'ÁO SƠ MI',
        image: 'somi.jpeg',
        price: 50000
    },
    {
        id: 2,
        name: 'ÁO THUN',
        image: 'aothun.jpeg',
        price: 80000
    },
    {
        id: 3,
        name: 'ÁO BOMBERS',
        image: 'bomber.jpeg',
        price: 20000
    },
    {
        id: 4,
        name: 'ÁO KHOÁC',
        image: 'aokhoac (1).jpeg',
        price: 20000
    },
    {
        id: 5,
        name: 'QUẦN ĐÙI',
        image: 'quandui.jpeg',
        price: 10000
    },
    {
        id: 6,
        name: 'QUẦN KAKI',
        image: 'kaki.jpeg',
        price: 120000
    }
];
let listCarts  = JSON.parse(localStorage.getItem("listCarts")) || [];

// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="/images/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()} VND</div>
//             <button onclick="addToCart(${key})">THÊM VÀO</button>`;
//         list.appendChild(newDiv);
//     });
// }
function initApp() {
    for (let i = 0; i < products.length; i++) {
      let value = products[i];
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
          <img src="/images/${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price} VND</div>
          <button onclick="addToCart(${i})">THÊM VÀO</button>
      `;
      list.appendChild(newDiv);
    }
  }
initApp();


// function addToCart(key){
//     if(listCarts[key] == null){
//         listCarts[key] = JSON.parse(JSON.stringify(products[key]));
//         listCarts[key].quantity = 1;
//     }else{
//         listCarts[key].quantity += 1;
//     }
//     localStorage.setItem("listCart", JSON.stringify(listCarts));
//     reloadCart();
// }
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = { ...products[key], quantity: 1};
    }else{
        listCarts[key].quantity +=1;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCarts));
    reloadCart();
}
// function reloadCart(){
//     listCart.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCarts.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCart.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }

function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    for (let i = 0; i < listCarts.length; i++){
        let value = listCarts[i];
        if(value != null){
            let newLi = document.createElement('li');
            newLi.innerHTML = `
                <div><img src="/images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price}</div>
                <div>
                    <button onclick="changeQuantity(${i}, ${value.quantity - 1})" class="increase-reduce">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${i}, ${value.quantity + 1})" class="increase-reduce">+</button>
                </div>
                <button onclick="deleted(${i})" class="del">Xoá</button>
                `;
                
                listCart.appendChild(newLi);
                totalPrice += value.price * value.quantity;
                count += value.quantity;
        }
    }
    total.innerText = `${totalPrice} VND` ;
    quantity.innerText = count;
}
reloadCart();
// const delete = document.querySelector(".delete");
function deleted(key){
    delete listCarts[key];
    localStorage.setItem("listCarts", JSON.stringify(listCarts));
    reloadCart();
}
function changeQuantity(key, newQuantity){
    if(newQuantity <= 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = newQuantity;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCarts));
    reloadCart();
}