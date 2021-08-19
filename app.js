function updateProductNumber(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    updateCartTotal();
}

function upProductInput(product, price, action) {
    document.getElementById(product + '-number').addEventListener(action, function (event) {
        const productInput = event.target;
        let productNumber = productInput.value;
        const productTotal = document.getElementById(product + '-total');
        productTotal.innerText = productNumber * price;
        updateCartTotal();
    });
}
upProductInput('case', 59, 'change');
upProductInput('case', 59, 'keyup');
upProductInput('phone', 1219, 'change');
upProductInput('phone', 1219, 'keyup');

function countProduct(product) {
    let countTotal = document.getElementById(product + '-number');
    countTotal = parseInt(countTotal.value);
    return countTotal;

}
function updateCartTotal() {
    const phoneTotal = countProduct('phone') * 1219;
    const caseTotal = countProduct('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    let tax = subTotal * 0.02;
    tax = tax.toFixed(2);
    tax = parseFloat(tax);
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}


document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-mminus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});