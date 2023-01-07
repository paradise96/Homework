const CART = [
    {
        title: 'Broad',
        qty: 3,
        price: 12.50,
        isBuy: false,
    }
];

function addToCart() {
    const title = document.getElementById('prodTitle').value.trim();
    const qty = parseInt(document.getElementById('prodQty').value);
    const price = parseFloat(document.getElementById('prodPrice').value);
    let isValid = true;
    if(title === ''){
        isValid = false;
        alert('Enter product title');
    }
    if(isNaN(qty) || qty<= 0){
        isValid = false;
        alert('Enter correct value!');
    }
    if(isNaN(price) || price <=0){
        isValid = false;
        alert('Enter price value!');
    }
    if(isValid) {
        const findIndex = CART.findIndex((el)=> {
            return el.title === title;
        });
        if(findIndex !== -1) {
            const newQty = CART[findIndex].qty + qty;
            CART[findIndex].qty = newQty;
        } else {
            CART.push({
                title: title,
                qty: qty,
                price: price,
                isBuy: false,
            });
        }
        viewProducts();
        alert('Product successfully added');
        document.getElementById('prodTitle').value = '';
        document.getElementById('prodQty').value ='1';
        document.getElementById('prodPrice').value = '';
    }
}
function viewProducts () {
    let list = '';
    CART.forEach((prod, index) => {
        const status = prod.isBuy ? '<span class="badge rounded-pill text-bg-success">yes</span>'
        : '<span class="badge rounded-pill text-bg-danger">no</span>';

        list +=`
        <tr>
        <td>${index + 1}</td>
        <td>${prod.title}</td>
        <td>${status}</td>
        <td>${prod.qty}</td>
        <td>${prod.price.toFixed(2)}</td>
        <td>${(prod.qty * prod.price).toFixed(2)}</td>
        <td>`;
        if(!prod.isBuy) {
            list += `
            <button type="button" class="btn btn-info btn-sm" onclick="buyProduct(${index})">Buy</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="removeProduct(${index})">Remove</button>`;
        }
        list +=`</td>
    </tr>`;
    });
    document.getElementById('productTbody').innerHTML = list;
    calcTotal();
}
function buyProduct(index) {
    CART[index].isBuy = true;
    viewProducts();
}
function removeProduct(index) {
    CART.splice(index, 1);
    viewProducts();
}
function calcTotal() {
    //let total = 0;
    // for (let i = 0; i < CART.length; i++){
    //     total += CART[i].qty * CART[i].price; 
    // }
    const total = CART.reduce((acc, el)=> {
        return acc + el.qty * el.price;
    }, 0);
    document.getElementById('cardTotal').innerHTML = list;
}
viewProducts();