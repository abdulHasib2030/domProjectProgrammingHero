
const amount = document.getElementById("add-money")
amount.addEventListener('click', function(event){
    event.preventDefault(); // prevent page reload after form submit
    // get money to be added to the account
    const addMoney = document.getElementById('amount').value;
    // get the pin number provided
    const pinNumber = document.getElementById('pin').value
    
    if (pinNumber === '12345'){
       
        const money = document.getElementById('money').innerText
        let newBalance = (Number(money) + Number(addMoney) )
        document.getElementById('money').innerText = newBalance
        
        
    }
    else{
        alert("Failed to add money! Please try again.")
    }
console.log
})

const addMoneyShow = document.getElementById('add-money-show')
addMoneyShow.addEventListener('click', function(){
    btnShow('add-money-form')
})
const cashOutShow = document.getElementById('cash-out-show')
cashOutShow.addEventListener('click', function(){
    btnShow('cash-out-form')
})


