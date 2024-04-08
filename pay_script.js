//Brooklyn Little

const form = document.getElementById('paymentForm');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateForm()) {
                // Call proxy object to handle secure communication
                handlePayment();
            }
        });


function validateForm() {
    const fullName = document.getElementById('fullName').value
    const addressLine1 = document.getElementById('addressLine1').value;
    const city = document.getElementById('addressLine1').value;
    const state = document.getElementById('addressLine1').value;
    const zipCode = document.getElementById('addressLine1').value;
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expMonth = document.getElementById('expMonth').value;
    const cvv = document.getElementById('cvv').value;

    if (!fullName || !addressLine1 || !city || !state || !zipCode || !cardName || !cardNumber || !expMonth || !expYear || !cvv) {
        alert('Please fill all required fields')
        return false;
    }

    return true;

}
document.addEventListener("DOMContentLoaded", function () {
    const proceedToCheckoutButton = document.getElementById('proceedToCheckoutButton');
    proceedToCheckoutButton.addEventListener('click', showCheckoutScreen);

    const payButton = document.getElementById('pay');
    payButton.addEventListener('click', handlePaymentButtonClick);
});

function showCheckoutScreen() {
    // Hide the billing address screen
    document.getElementById('billingAddressScreen').style.display = 'none';
    // Show the checkout screen
    document.getElementById('checkoutScreen').style.display = 'block';
}

function handlePaymentButtonClick() {
    // Set amount to zero
    document.getElementById('amount').value = '$0.00';

    // Call proxy object to handle payment
    handlePayment();

    // send message
   alert('Payment Completed');
}

function handlePayment() {
    const paymentProxy = new PaymentProxy();
    paymentProxy.processPayment();
}

class PaymentProxy {
    processPayment() {
        console.log('Processing payment..');
    }
}

/*
function handlePayment() {
    const paymentProxy = new PaymentProxy();
    paymentProxy.processPayment();
}

class PaymentProxy {
    processPayment() {
        console.log('Processing payment..');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const proceedToCheckoutButton = document.getElementById('proceedToCheckoutButton');
    proceedToCheckoutButton.addEventListener('click', showCheckoutScreen);
});

function showCheckoutScreen() {
    // Hide the billing address screen
    document.getElementById('billingAddressScreen').style.display = 'none';
    // Show the checkout screen
    document.getElementById('checkoutScreen').style.display = 'block';
}

*/
