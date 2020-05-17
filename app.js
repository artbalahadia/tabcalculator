// Event Listener (Submit)
document.getElementById('tab-form').addEventListener('submit', function(event){
    // To hide results
    document.getElementById('results').style.display = 'none';
    // To show loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculate, 2000);

    event.preventDefault();
});

// Calculate function
function calculate(){
    // Input Variables
    const amount = document.getElementById('amount');
    const tipPercent = document.getElementById('tip-percent');
    const splitBy = document.getElementById('splits');

    // Output Variables
    const splitPayment = document.getElementById('split-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalTip = document.getElementById('total-tip');

    // Calculator Variables
    const tabAmount = parseFloat(amount.value);
    const tipAmount = parseFloat(tipPercent.value) / 100;
    const splitByNumber = parseFloat(splitBy.value);

    // Compute Split Payment
    const x = (1 + tipAmount)
    const total = (tabAmount * x);

    //Display calculation
    if(isFinite(total)){
        splitPayment.value = (total / splitByNumber).toFixed(2);
        totalPayment.value = total.toFixed(2);
        totalTip.value = (total - tabAmount).toFixed(2);

        // To display results
        document.getElementById('results').style.display = 'block';
        // To hide loader after results
        document.getElementById('loading').style.display = 'none';
    } else {
        errorNotice('Oops! Please check your values!')
    }
}

// Error notice
function errorNotice(error){
    // To display results
    document.getElementById('results').style.display = 'none';
    // To hide loader after results
    document.getElementById('loading').style.display = 'none';
    // To create error div
    const errorDiv = document.createElement('div');
    // To grab card and heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // To add class
    errorDiv.className = 'alert alert-danger';
    // To display error
    errorDiv.appendChild(document.createTextNode(error));
    // To insert error on top of heading
    card.insertBefore(errorDiv, heading);

    // To clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// clear Error function
function clearError(){
    document.querySelector('.alert').remove();
}
