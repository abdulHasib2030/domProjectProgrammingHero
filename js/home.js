
const amount = document.getElementById("add-money")
amount.addEventListener('click', function(event){
    event.preventDefault(); // prevent page reload after form submit
    // get money to be added to the account
    const addMoney = document.getElementById('amount');
    // get the pin number provided
    const pinNumber = document.getElementById('pin')

console.log(addMoney.value, pinNumber.value)
})


