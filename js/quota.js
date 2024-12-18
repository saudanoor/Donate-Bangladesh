// Card One (Noakhali)
document.getElementById('donate-card-3').addEventListener('click', function(event){

    event.preventDefault();

    console.log('button added');

    // step -2 get the donation money to be added addMonInputTwo
    const addMonInputThree = document.getElementById('add-money3').value;
    console.log(addMonInputThree);


    //check for empty field or negative value
    if(addMonInputThree==='' || parseFloat(addMonInputThree)<=0){
        alert('Please enter a valid amount');
        document.getElementById('add-money3').value = '';
        return;
    }


    


    // //check for greater than current total balance

    // if(addMonInputTwoF > totalBalanceF){
    //     alert('Insufficient balance! The donation amount exceeds your available balance.');
    //     return;
    // }



    if(addMonInputThree >=0){
        console.log('money is greater than 0');
        // step- 4 get the current balance, Total Balance
        const currentCard3 = document.getElementById('current-money-card-3').innerText;
        console.log(currentCard3);

        const totalBalance = document.getElementById('top-total-Balance').innerText;
        console.log(totalBalance);

        



        //parseFloat these two, then add
        //parseFloat total balance, then subtract 
        const addMonInputThreeF = parseFloat(addMonInputThree);
        const currentCard3F = parseFloat(currentCard3);

        const totalBalanceF = parseFloat(totalBalance);


        const newBalanceCard3 = addMonInputThreeF + currentCard3F;
        console.log(newBalanceCard3);

        const newTotalBalance = totalBalanceF - addMonInputThreeF;
        console.log(newTotalBalance);



        //Update new balance in the Card 1 UI and Total Balance
        document.getElementById('current-money-card-3').innerText = newBalanceCard3; 

        

        document.getElementById('top-total-Balance').innerText= newTotalBalance;

     




        const currentDate = new Date();
        const formatDate = currentDate.toLocaleDateString('en-GB', {
            timeZone : 'Asia/Dhaka',
            year : 'numeric',
            day : '2-digit',
            month : 'short',
            day : '2-digit',
            weekday : 'short',
            hour : '2-digit',
            minute : '2-digit',
            second: '2-digit',
            timeZoneName: 'short',


        });

        const cardThreeTitle = document.getElementById('card-3-title').innerText;

        


        //add to History

        const p =document.createElement('p');
        // p.innerText = `Added: ${addMonInputOneF} New balance: ${newBalanceCard1}`;
        // console.log(p);

        // p.innerHTML= `
        // <h4 class = "text-2xl font-bold my-4">Added: ${addMonInputOneF} New balance: ${newBalanceCard1} </h4>
        // `


        p.innerHTML= `
<div class="flex flex-col items-center overflow-hidden">

    <div class="border-2 border-[#1111111A] mx-4 md:mx-7 p-4 rounded-lg  flex  justify-center items-start flex-col gap-4 sm:gap-6 mt-4 w-full md:w-[940px] ">

        <div class="h-[136px]   w-[940px] p-4 md:p-5 mx-2   mr-80 rounded-2xl flex flex-col items-start">

           

           <h4 class = "text-lg sm:tex-xl  md:text-2xl font-bold mb-2 md:mb-4 "> 
           ${addMonInputThreeF} Taka is Donated for  ${cardThreeTitle}
           </h4>

            <p class= " text-gray-500 text-sm sm:text-base "> Date: ${formatDate} (Bangladesh Standard Time)</p>
        </div>
    </div>

<div>        
    
        `
        console.log(p);





        document.getElementById('history-card').appendChild(p);


        // Clear the input field
        document.getElementById('add-money3').value = '';


// Display the modal and update its content
const modal = document.getElementById('donation-modal');

modal.showModal(); // Show the modal

// Add an event to hide the modal when the close button is clicked
document.getElementById('close-modal-btn').onclick = function() {
 modal.close(); // Hide the modal
 };


    }
    else{
        alert('Please Enter  a Valid Amount');
        document.getElementById('add-money3').value = '';
    }

})