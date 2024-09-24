// Button show and hidden

function sectionShow(id){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-card-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

// Button Style function

function btnStyle(id){
    document.getElementById('show-donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('show-history-btn').classList.remove('bg-[#B4F461]');

    document.getElementById(id).classList.add('bg-[#B4F461]');
}

document.getElementById('show-donation-btn').addEventListener('click', function(){
    btnStyle('show-donation-btn');
    sectionShow('donation-card-section');
})

document.getElementById('show-history-btn').addEventListener('click', function(){
    btnStyle('show-history-btn');
    sectionShow('history-section');
})