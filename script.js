document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()
    document.getElementById('Annual_income').classList.remove('error');
    document.getElementById('Annual_income_error1').style.display = 'none';
    document.getElementById('Annual_income_error2').style.display = 'none';
    document.getElementById('AccountBalance').classList.remove('error');
    document.getElementById('AccountBalanceError1').style.display = 'none';
    document.getElementById('AccountBalanceError2').style.display = 'none';
    document.getElementById('loanAmount').classList.remove('error');
    document.getElementById('LoanAmountError1').style.display = 'none';
    document.getElementById('LoanAmountError2').style.display = 'none';
    document.getElementById('Credit_History').classList.remove('error');
    document.getElementById('CreditHistoryError').style.display = 'none';
    document.getElementById('date').classList.remove('error');
    document.getElementById('LastdepositDateError1').style.display = 'none';
    document.getElementById('date3').classList.remove('error');
    document.getElementById('LastLoanCollectiondateError').style.display = 'none';
    document.getElementById('date4').classList.remove('error');
    document.getElementById('date5').classList.remove('error');
    document.getElementById('LoanRepaymentPeriodError').style.display = 'none';
    document.getElementById('AccountType').classList.remove('error');
    document.getElementById('AccountTypeError').style.display = 'none';

 valid = true

    let loanform ={
        Annual_income: document.getElementById('Annual_income').value,
        AccountBalance :document.getElementById('AccountBalance').value,
        loanAmount :document.getElementById('loanAmount').value,
        Credit_History :  document.getElementById('Credit_History').value,
        date: new Date(document.getElementById('date').value),
        date3: new Date(document.getElementById('date3').value),
        date4 : new Date(document.getElementById('date4').value),
        date5 : new Date(document.getElementById('date5').value),
        AccountType:document.getElementById('AccountType').value,
    }
    let AccountBalance1 = parseInt(loanform.AccountBalance);
    let loanAmount1 =parseInt(loanform.loanAmount);

    let Creditscore = 0
    if(loanform.Annual_income ===""){
        document.getElementById('Annual_income').classList.add('error');
        document.getElementById('Annual_income_error2').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
    if(isNaN(loanform.Annual_income)){
        document.getElementById('Annual_income').classList.add('error');
        document.getElementById('Annual_income_error1').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }
     if(loanform.AccountBalance === "" ) {
        document.getElementById('AccountBalance').classList.add('error');
        document.getElementById('AccountBalanceError1').style.display = 'block';
        error = true;
        return false
    }else{
        error = false
    }
    if(isNaN(loanform.AccountBalance)){
        document.getElementById('AccountBalance').classList.add('error');
        document.getElementById('AccountBalanceError2').style.display = 'block';
        error = true
        return  false
    }else{
        error =false
    }
     if (loanform.loanAmount ===""){
        document.getElementById('loanAmount').classList.add('error');
        document.getElementById('LoanAmountError2').style.display = 'block';
        error = true;
        return false
    }else{
        error =false
    }
     if (isNaN(loanform.loanAmount)){
        document.getElementById('loanAmount').classList.add('error');
        document.getElementById('LoanAmountError1').style.display = 'block';
        error = true;
        return false
    }else{
        error = true
    }
    if(loanform.Credit_History === "") {
        document.getElementById('Credit_History').classList.add('error');
        document.getElementById('CreditHistoryError').style.display = 'block';
        error = true;
        return false
    }else{
        error = false
    }
     if(loanform.date === ""){
        document.getElementById('date').classList.add('error');
        document.getElementById('LastdepositDateError1').style.display = 'block';
        error = true;
        return false
    }else{
        error = false
    }
    if(loanform.date3 ==""){
        document.getElementById('date3').classList.add('error');
        document.getElementById('LastLoanCollectiondateError').style.display = 'block';
        error = true
        return false
    }else {
        error = false
    }
    if(loanform.date4 ==""){
        document.getElementById('date4').classList.add('error');
        document.getElementById('LoanRepaymentPeriodError').style.display = 'block';
        error = true
        return false
    }else {
        error = false
    }
    if(loanform.date5 ==""){
        document.getElementById('date5').classList.add('error');
        document.getElementById('LoanRepaymentPeriodError').style.display = 'block';
        error = true
        return false
    }else {
        error = false
    }
    if (loanform.AccountType ===""){
        document.getElementById('AccountType').classList.add('error');
        document.getElementById('AccountTypeError').style.display = 'block';
        error = true
        return false
    }else{
        error = false
    }   
    if (AccountBalance1 > loanAmount1) {
        Creditscore += 10  
        console.log(Creditscore) 
    }else if(AccountBalance1 < loanAmount1){
        Creditscore -=10
        console.log(Creditscore)
    }
    if (loanform.Credit_History === "Yes"){
        Creditscore += 10
    }else if (loanform.Credit_History === "No") {
        Credit_History += 0 
    }

    var presentDate = new Date()
    var amonthago = new Date()
    amonthago.setMonth(amonthago.getMonth() -1)
    if (loanform.date >= amonthago && loanform.date <= presentDate ){
        Creditscore += 5
    }

    var sixmonthsbefore = new Date()
    sixmonthsbefore.setMonth(sixmonthsbefore.getMonth() -6)
    if (loanform.date3 <= sixmonthsbefore && loanform.date3 >= presentDate){
        Creditscore += 10
    }

    var nextSixMonth = new Date()
    nextSixMonth.setMonth(nextSixMonth.getMonth() + 6)
     if(nextSixMonth >= loanform.date5 && presentDate <= loanform.date5){
        Creditscore +=5
    }
    if (loanform.AccountType === "Current"){
        Creditscore += 10
    }else if (loanform.AccountType === "Saving"){
        Creditscore += 5
    }  
    
    var annualIncome = loanform.Annual_income
    var percent = 45
    var answer = (percent / 100) * annualIncome
    
     
    if(loanform.loanAmount > answer || Creditscore <=30) {
        alert('We are unable to provide the neccesary funds, given the current evaluation of your application.')
    }else{
        alert('Authorization for your borrowing request has been approved.')
    }
    
    console.log(Creditscore);
});