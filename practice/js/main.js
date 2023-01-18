const CART = [
    {
        title: 'Broad',
        qty: 3,
        price: 12.50,
        isBuy: false,
    },
    {
        title: 'Milk',
        qty: 2,
        price: 32.20,
        isBuy: true,
    },
    {
        title: 'Beer',
        qty: 10,
        price: 34.50,
        isBuy: true,
    },
    {
        title: 'Potato',
        qty: 4,
        price: 8,
        isBuy: false,
    }
];

const discount = {
    WINTER20: {
        value: 20,
        type: 'percent',
    },
    WINTER30: {
        value: 30,
        type: 'percent',
    },
    WINTER40: {
        value: 40,
        type: 'percent',
    },
    NEWYEAR200: {
        value: 200,
        type: 'fixed',
    },
};
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
        // alert('Product successfully added');
        toast.success('Product successfully added');
        document.getElementById('prodTitle').value = '';
        document.getElementById('prodQty').value ='1';
        document.getElementById('prodPrice').value = '';
    }
}
function viewProducts () {
    let list = '';
    let index = 0;
    // for(let i = 0; i<CART.length; i++){
    //     if(!CART[i].isBuy) {
    //         const prod = CART[i];
    //         list += productItem(prod, i);
    //     }
    // }
        // for(let i = 0; i<CART.length; i++){
    //     if(CART[i].isBuy) {
    //         const prod = CART[i];
    //         list += productItem(prod, i);
    //     }
    // }
    CART.filter(el => !el.isBuy).forEach((prod) => {
        list += productItem(prod, index);
        index++;
    });
    CART.filter(el => el.isBuy).forEach((prod) => {
        list += productItem(prod, index);
        index++;
    });

    document.getElementById('productTbody').innerHTML = list;
    viewTotal();
}

function productItem(prod, index) {
    let list =`
        <tr>
        <td>${index + 1}</td>
        <td>${prod.title}</td>
        <td>${prod.isBuy ? '<span class="badge rounded-pill text-bg-success">yes</span>' 
        : '<span class="badge rounded-pill text-bg-danger">no</span>'}</td>
        <td>${prod.qty}</td>
        <td>${prod.price.toFixed(2)}</td>
        <td>${(prod.qty * prod.price).toFixed(2)}</td>
        <td>`;
        if(!prod.isBuy) {
            list += `
            <button type="button" class="btn btn-info btn-sm" onclick="buyProduct('${prod.title}')">Buy</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="removeProduct('${prod.title}')">Remove</button>`;
        }
        list +=`</td>
    </tr>`;
    return list;
}

function buyProduct(title) {
    // const index = CART.findIndex( el => el.title === title);
    CART[CART.findIndex( el => el.title === title)].isBuy = true;
    viewProducts();
}
function removeProduct(title) {
    // const index = CART.findIndex( el => el.title === title);
    CART.splice( CART.findIndex( el => el.title === title), 1);
    viewProducts();
}
function calcTotal() {
    //let total = 0;
    // for (let i = 0; i < CART.length; i++){
    //     total += CART[i].qty * CART[i].price; 
    // }
    const total ={
        buy: 0,
        notBuy: 0,
        all: 0,
    };
    CART.forEach(prod => {
        const cost = prod.qty * prod.price;
        if(prod.isBuy){
            total.buy += cost;
        } else {
            total.notBuy += cost;
        }
    });
    total.all = total.buy + total.notBuy;
    return total;
    // const totalBuy = CART.filter(el => el.isBuy).reduce((acc, el)=> {
    //     return acc + el.qty * el.price;
    // }, 0);
    // const totalNotBuy = CART.filter(el => !el.isBuy).reduce((acc, el)=> {
    //     return acc + el.qty * el.price;
    // }, 0);
    // const total = CART.reduce((acc, el)=> {
    //     return acc + el.qty * el.price;
    // }, 0);
   
}
function viewTotal() {
    const total = calcTotal();
    document.getElementById('cardTotal').innerHTML = total.all.toFixed(2);
    document.getElementById('cartTotalBnB').innerHTML = `<big>${total.buy.toFixed(2)}</big>, 
    <small>${total.notBuy.toFixed(2)}</small>`;
    document.getElementById('showSum').innerHTML = total.buy.toFixed(2);
    if(document.getElementById('discount').value.trim() !== ''){
        calcDiscount();
    }
}
viewProducts();

function calcDiscount() {
    const code = document.getElementById('discount').value.trim();
    let discountValue = '';
    const total = calcTotal();
    let finalSum = total.buy;
    if(code !=='') {
        if(discount[code]){
            if(discount[code].type === 'percent'){
                discountValue = `${discount[code].value}%`;
                finalSum = total.buy - (total.buy * discount[code].value/ 100);
            } else {
                discountValue = `${discount[code].value}₴`;
                finalSum = total.buy - discount[code].value;
            }
            document.getElementById('valueDiscount').innerHTML = discountValue;
            document.getElementById('finalSum').innerHTML = finalSum.toFixed(2);
        } else {
            toast.danger('There is no such code!');
        }
    } else {
        toast.warning('Enter discount code!!!');
    }
}
const discountBtn = document.getElementById('discount-btn');
discountBtn.addEventListener('click', function(){
    calcDiscount();
});