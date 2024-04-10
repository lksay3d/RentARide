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

// Define a PaymentService interface
class PaymentService {
    processPayment() {}
}

// RealSubject class implementing the PaymentService interface
// Real payment is processPayment after the security operations
class RealPaymentService extends PaymentService {
    processPayment() {
        console.log('Processing payment..');
       
    }
}

// Proxy class implementing the PaymentService interface
class PaymentProxy extends PaymentService {
    constructor() {
        super();
        this.realPaymentService = new RealPaymentService();
    }

    processPayment() {
        // Perform any security operations before delegating to the real payment service
        console.log('Performing security checks before processing payment..');
        this.realPaymentService.processPayment();
    }
}

// using the proxy
const paymentProxy = new PaymentProxy();
paymentProxy.processPayment();


function handlePaymentButtonClick() {
    // Set amount to zero
    document.getElementById('amount').value = '$0.00';
    alert("Payment Complete");
    // Call proxy object to handle payment
    handlePayment();
  
}
