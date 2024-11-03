console.log('toggle added');

//show the history part
document.getElementById('btn-show-history').addEventListener('click', function(){
    console.log('history clicked');

    //show history form
    document.getElementById('history-form').classList.remove('hidden');
    

    //hide donation form
    document.getElementById('donation-form').classList.add('hidden');
    
    

    //green button
    document.getElementById('btn-show-history').classList.add('bg-[#B4F461]');
    document.getElementById('btn-show-donation').classList.remove('bg-[#B4F461]');



})


//show the donation part
document.getElementById('btn-show-donation').addEventListener('click', function(){
    console.log('donation clicked');

    //show history form
    document.getElementById('donation-form').classList.remove('hidden');

    //hide donation form
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById('btn-show-history').classList.remove('bg-[#B4F461]');

    //green button
    document.getElementById('btn-show-donation').classList.add('bg-[#B4F461]');
    document.getElementById('btn-show-history').classList.remove('bg-[#B4F461]');


})