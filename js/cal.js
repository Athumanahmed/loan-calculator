// listen for submit
document.getElementById('loanform').addEventListener('submit', function(e){

    // hide results..
    document.getElementById('results').style.display = 'none';

    // show loader
    document.getElementById('loading').style.display = 'block';


    setTimeout(calculation , 1000);
    e.preventDefault();
});

// calculating results..........
function calculation(){

    // .UI Variables...........
  const Amount = document.getElementById('amount');
  const Interest = document.getElementById('interest');
  const Years = document.getElementById('years');
  const Monthlypayment = document.getElementById('monthly-payment');
  const Totalpayment = document.getElementById('total-payment');
  const Totalinterest = document.getElementById('total-interest');

  const principal =parseFloat(amount.value);
  const interestcalculated = parseFloat(interest.value) / 100 / 12;
  const paymentcalculated = parseFloat(years.value) * 12;


//   compute monthly payment.........

const x = Math.pow(1 + interestcalculated , paymentcalculated );
const monthly = (principal * x * interestcalculated) / (x-1);

if(isFinite(monthly)) {
    Monthlypayment.value = monthly.toFixed(1);
    Totalpayment.value = (monthly * paymentcalculated).toFixed(1);
    Totalinterest.value = ((monthly * paymentcalculated) - principal).toFixed(1);

    // show results..
    document.getElementById('results').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';
} else {
    showError('Please check your numbers again')
}


    
}

// show error
function showError(error){

 // hide results..
 document.getElementById('results').style.display = 'none';

 // hide loader
 document.getElementById('loading').style.display = 'none';


    // create a div
    const errordiv = document.createElement('div');


    // get elements..
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    // add class
    errordiv.className = ('alert alert-danger');

    // create text node and append to div.
    errordiv.appendChild(document.createTextNode(error));

    // insert error above heading.
    card.insertBefore(errordiv , heading )

    // clear error after 2 seconds..
    setTimeout(clearError , 2000);
}

// clear error 
function clearError(){
    document.querySelector('.alert').remove();
}