

/// search: form submit reloading the page

document.getElementById('button-login').addEventListener('click', function(event){
    // stem - 2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // <-------- vejal to beginners
    console.log("login button click")
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin').value;
    console.log(phoneNumber, pinNumber)
    if(phoneNumber === '5' && pinNumber === '12345'){
        window.location.href = './home.html'
    }
    else{
        alert("wrong phone numbaer and password")
    }
})

