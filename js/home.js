// Donation submit

document.getElementById('donation-btn-1').addEventListener('click', function (event) {
    event.preventDefault();

    const mainBalance = getTextValue('main-balance');
    const donationCardBalance = getTextValue('donation-card-balance');
    const onlyInputValue = document.getElementById('donation-input').value;
    const inputValue = getInputValue('donation-input');

    if (inputValue <= 0) {
        alert('Invalid Amount! Please enter a valid amount');
        return;
    }

    if (isNaN(onlyInputValue)) {
        alert('Invalid Input! Please enter a valid amount');
        return;
    }

    if (mainBalance > inputValue) {

        const newCardBalance = inputValue + donationCardBalance;
        const newMainBalance = mainBalance - inputValue;

        document.getElementById('donation-card-balance').innerText = newCardBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        document.getElementById('donation-input').value = "";

        const donationHeading = getOnlyText('donation-heading');
        const historySectionDiv = document.getElementById('history-section');

        const dateAndTime = new Date();

        // Dynamic text for history section 
        const div = document.createElement('div');
        div.classList.add('inline-block', 'p-5', 'rounded-md', 'bg-lime-100')
        const h2 = document.createElement('h2');
        h2.classList.add('font-bold');
        const p = document.createElement('p');
    
        p.innerText = `${dateAndTime}`
        h2.innerText = `${inputValue} Taka is ${donationHeading}`
    
        historySectionDiv.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);

        my_modal_1.showModal();
        document.getElementById('modal-p').innerText = `You ${donationHeading}`
       
    }
    else {
        alert('You do not have sufficient balance.')
    }
})


document.getElementById('donation-btn-2').addEventListener('click', function (event) {
    event.preventDefault();

    const mainBalance = getTextValue('main-balance');
    const donationCardBalance = getTextValue('donation-card-balance-2');
    const onlyInputValue = document.getElementById('donation-input-2').value;
    const inputValue = getInputValue('donation-input-2');

    if (inputValue <= 0) {
        alert('Invalid Amount! Please enter a valid amount');
        return;
    }

    if (isNaN(onlyInputValue)) {
        alert('Invalid Input! Please enter a valid amount');
        return;
    }

    if (mainBalance > inputValue) {

        const newCardBalance = inputValue + donationCardBalance;
        const newMainBalance = mainBalance - inputValue;

        document.getElementById('donation-card-balance-2').innerText = newCardBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        document.getElementById('donation-input-2').value = "";

        const donationHeading = getOnlyText('donation-heading-2');
        const historySectionDiv = document.getElementById('history-section');

        const dateAndTime = new Date();

        // Dynamic text for history section 

        const div = document.createElement('div');
        div.classList.add('inline-block', 'p-5', 'rounded-md', 'bg-lime-100')
        const h2 = document.createElement('h2');
        h2.classList.add('font-bold');
        const p = document.createElement('p');

        p.innerText = `${dateAndTime}`
        h2.innerText = `${inputValue} Taka is ${donationHeading}`


        historySectionDiv.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);

        my_modal_1.showModal();
        document.getElementById('modal-p').innerText = `You ${donationHeading}`
       
    }
    else {
        alert('You do not have sufficient balance.')
    }
})

document.getElementById('donation-btn-3').addEventListener('click', function (event) {
    event.preventDefault();

    const mainBalance = getTextValue('main-balance');
    const donationCardBalance = getTextValue('donation-card-balance-3');
    const onlyInputValue = document.getElementById('donation-input-3').value;
    const inputValue = getInputValue('donation-input-3');

    if (inputValue <= 0) {
        alert('Invalid Amount! Please enter a valid amount');
        return;
    }

    if (isNaN(onlyInputValue)) {
        alert('Invalid Input! Please enter a valid amount');
        return;
    }

    if (mainBalance > inputValue) {

        const newCardBalance = inputValue + donationCardBalance;
        const newMainBalance = mainBalance - inputValue;

        document.getElementById('donation-card-balance-3').innerText = newCardBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        document.getElementById('donation-input-3').value = "";

        const donationHeading = getOnlyText('donation-heading-3');
        const historySectionDiv = document.getElementById('history-section');

        const dateAndTime = new Date();

        // Dynamic text for history section 

        const div = document.createElement('div');
        div.classList.add('inline-block', 'p-5', 'rounded-md', 'bg-lime-100')
        const h2 = document.createElement('h2');
        h2.classList.add('font-bold');
        const p = document.createElement('p');

        p.innerText = `${dateAndTime}`
        h2.innerText = `${inputValue} Taka is ${donationHeading}`


        historySectionDiv.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);

        my_modal_1.showModal();
        document.getElementById('modal-p').innerText = `You ${donationHeading}`
       
    }
    else {
        alert('You do not have sufficient balance.')
    }
})