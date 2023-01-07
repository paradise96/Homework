"use strict";

var CART = [{
  title: 'Broad',
  qty: 3,
  price: 12.50,
  isBuy: false
}];

function addToCart() {
  var title = document.getElementById('prodTitle').value.trim();
  var qty = parseInt(document.getElementById('prodQty').value);
  var price = parseFloat(document.getElementById('prodPrice').value);
  var isValid = true;

  if (title === '') {
    isValid = false;
    alert('Enter product title');
  }

  if (isNaN(qty) || qty <= 0) {
    isValid = false;
    alert('Enter correct value!');
  }

  if (isNaN(price) || price <= 0) {
    isValid = false;
    alert('Enter price value!');
  }

  if (isValid) {
    var findIndex = CART.findIndex(function (el) {
      return el.title === title;
    });

    if (findIndex !== -1) {
      var newQty = CART[findIndex].qty + qty;
      CART[findIndex].qty = newQty;
    } else {
      CART.push({
        title: title,
        qty: qty,
        price: price,
        isBuy: false
      });
    }

    viewProducts();
    alert('Product successfully added');
    document.getElementById('prodTitle').value = '';
    document.getElementById('prodQty').value = '1';
    document.getElementById('prodPrice').value = '';
  }
}

function viewProducts() {
  var list = '';
  CART.forEach(function (prod, index) {
    var status = prod.isBuy ? '<span class="badge rounded-pill text-bg-success">yes</span>' : '<span class="badge rounded-pill text-bg-danger">no</span>';
    list += "\n        <tr>\n        <td>".concat(index + 1, "</td>\n        <td>").concat(prod.title, "</td>\n        <td>").concat(status, "</td>\n        <td>").concat(prod.qty, "</td>\n        <td>").concat(prod.price.toFixed(2), "</td>\n        <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n        <td>");

    if (!prod.isBuy) {
      list += "\n            <button type=\"button\" class=\"btn btn-info btn-sm\" onclick=\"buyProduct(".concat(index, ")\">Buy</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"removeProduct(").concat(index, ")\">Remove</button>");
    }

    list += "</td>\n    </tr>";
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
  var total = CART.reduce(function (acc, el) {
    return acc + el.qty * el.price;
  }, 0);
  document.getElementById('cardTotal').innerHTML = list;
}

viewProducts();