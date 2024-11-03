console.log('toggle added');

//show the history part
document.getElementById('btn-show-history').addEventListener('click', function(){
    console.log('history clicked');

    //show history form
    document.getElementById('history-form').classList.remove('hidden');

    //hide donation form
    document.getElementById('donation-form').classList.add('hidden');


})


//show the donation part
document.getElementById('btn-show-donation').addEventListener('click', function(){
    console.log('donation clicked');

    //show history form
    document.getElementById('donation-form').classList.remove('hidden');

    //hide donation form
    document.getElementById('history-form').classList.add('hidden');


})