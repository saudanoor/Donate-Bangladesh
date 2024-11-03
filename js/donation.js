console.log('donations page added');


document.getElementById('donate-card-1').addEventListener('click', function(event){

    event.preventDefault();

    console.log('button added');

    // step -2 get the donation money to be added
    const addMonInputOne = document.getElementById('add-money').value;
    console.log(addMonInputOne);

    if(addMonInputOne >=0){
        console.log('money is greater than 0');
        // step- 4 get the current balance, Total Balance
        const currentCard1 = document.getElementById('current-money-card-1').innerText;
        console.log(currentCard1);

        const totalBalance = document.getElementById('top-total-Balance').innerText;
        console.log(totalBalance);



        //parseFloat these two, then add
        //parseFloat total balance, then subtract 
        const addMonInputOneF = parseFloat(addMonInputOne);
        const currentCard1F = parseFloat(currentCard1);

        const totalBalanceF = parseFloat(totalBalance);


        const newBalanceCard1 = addMonInputOneF + currentCard1F;
        console.log(newBalanceCard1);

        const newTotalBalance = totalBalanceF - addMonInputOneF;
        console.log(newTotalBalance);

        //Update new balance in the Card 1 UI and Total Balance
        document.getElementById('current-money-card-1').innerText = newBalanceCard1; 

        document.getElementById('top-total-Balance').innerText= newTotalBalance;

        //add to History

        const p =document.createElement('p');
        // p.innerText = `Added: ${addMonInputOneF} New balance: ${newBalanceCard1}`;
        // console.log(p);

        // p.innerHTML= `
        // <h4 class = "text-2xl font-bold my-4">Added: ${addMonInputOneF} New balance: ${newBalanceCard1} </h4>
        // `

        p.innerHTML= `

        <div class="border-2 border-red-500 my-4">

        <h4 class = "text-2xl font-bold my-4">Added: ${addMonInputOneF} New balance: ${newBalanceCard1} </h4>

        </div>
        `
        console.log(p);





        document.getElementById('history-card').appendChild(p);




    }
    else{
        console.log('no')
    }






})