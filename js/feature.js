function btnShow(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}