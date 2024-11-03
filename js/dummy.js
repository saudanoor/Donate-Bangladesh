console.log('home added');

//add money to the account

//check if pin is correct, if correct, get the new money, get the previous money, add them , set them on the board

//step-1: add an event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click', function(event){

    event.preventDefault();


    console.log('money add button clicked');

    //step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get the pin 
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    //step 3: verify pin number
    if(pinNumberInput == '1234'){
        console.log('adding money to your account');

        //step 4:  get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        //step 5: add addMoneyInput with Balance
        // const newBalance= balance+addMoneyInput;
        const addmoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addmoneyNumber + balanceNumber;

        console.log(newBalance);

        //step 6: update the balance in the UI
        document.getElementById('account-balance').innerText= newBalance;


    }
    else{
        alert('Failed to add money')
    }

});