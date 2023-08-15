//all id and input value
const depositBtn = document.getElementById('depositbtn')

depositBtn.addEventListener('click', function(params) {
        //new balance
        let newBalanceId = document.getElementById('deposit-id')
        let newBalance = parseFloat(newBalanceId.value)
        newBalanceId.value = ''


        if (isNaN(newBalanceId.value)) {
            alert('please provide a number')
        }
        //added balance

        const depositId = document.getElementById('deposit')
        let depositBalance = parseFloat(depositId.innerText)

        depositId.innerText = newBalance + depositBalance

        //main balance
        const previousbalanceString = document.getElementById('previousbalance')

        const previousbalance = parseFloat(previousbalanceString.innerText)


        previousbalanceString.innerText = newBalance + previousbalance

        console.log(previousbalance)

    })
    //withdrraw


const withdrawBtn = document.getElementById('withdrawbtn')


withdrawBtn.addEventListener('click', function() {

    const withdrawInput = document.getElementById('withdraw-id');
    const withdrawInputValue = withdrawInput.value
    const withdrawNewBalance = parseFloat(withdrawInputValue)
    console.log(typeof withdrawNewBalance)

    //withdrawprevousbalance
    const withdrawPreviousInput = document.getElementById('')
    const

})