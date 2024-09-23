// Donation submit

document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const mainBalance = getTextValue('main-balance');
    const donationCardBalance = getTextValue('donation-card-balance');
    const inputValue = getInputValue('donation-input');


    if (mainBalance > inputValue){
        const newCardBalance = inputValue + donationCardBalance;
        const newMainBalance = mainBalance - inputValue; 

        document.getElementById('donation-card-balance').innerText = newCardBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        inputValue.valueOf = '';
    }
    else {
        alert('You do not have sufficient balance.')
    }
    
    // console.log(newCardBalance, newMainBalance);
    

})