// login button event handler

const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    var loginArea = document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display='block'
})

//deposit button event handler
const depositBtn = document.getElementById('add-deposit');
depositBtn.addEventListener('click', function(){
        const depositAmount = document.getElementById('deposit-amount').value;
        const depositNumber = parseFloat(depositAmount);
        const currentDepositAmount = document.getElementById('current-deposit').innerText;
        
        const currentDepositNumber = parseFloat(currentDepositAmount);
        
        const totalDepositNumber = (depositNumber + currentDepositNumber);
        document.getElementById('current-deposit').innerText = totalDepositNumber;

        const currentBalance = document.getElementById('current-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = (totalDepositNumber + currentBalanceNumber);
        document.getElementById('current-balance').innerText = totalBalance;
        document.getElementById('deposit-amount').value = "";
})

//withdtaw button event handler
const withdrawBtn = document.getElementById('add-withdraw');
withdrawBtn.addEventListener('click', function(){
       const withdrawAmount = document.getElementById('withdraw-amount').value;
       const withdrawAmountNumber=parseFloat(withdrawAmount);
       const currentWithdrawAmount = document.getElementById('current-withdraw').innerText;
      const currentWithdrawAmountNUmber =parseFloat(currentWithdrawAmount);

      const totalWithdrawNumber = withdrawAmountNumber + currentWithdrawAmountNUmber;

      document.getElementById('current-withdraw').innerText = totalWithdrawNumber;

      const currentBalance = document.getElementById('current-balance').innerText;
      const currentBalanceNumber = parseFloat(currentBalance);
      const totalBalance = (currentBalanceNumber - withdrawAmountNumber );
      document.getElementById('current-balance').innerText = totalBalance;


      
})

