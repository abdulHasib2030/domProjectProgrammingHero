document.getElementById('cash-out-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const casOut = document.getElementById('cash-out-amount').value
    const pinNumber = document.getElementById('cash-out-pin').value
    if (pinNumber === '12345'){
        const money = document.getElementById('money').innerText
        const newBalance = Number(money) - Number(casOut)
        document.getElementById('money').innerText = newBalance;
    }
    else{
        alert("Failed to cash out. Please try again later.")
    }
})