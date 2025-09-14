

const bankAccount = {
    balance: 0,
    transactions: [],

    deposit: function (amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push(`Deposited: ${amount}$`);
            alert(`Successfully deposited ${amount}$. New balance: ${this.balance}$`);
        } else {
            alert(`Deposit amount must be greater than 0.`);
        }
    },

    withdraw: function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push(`Withdrew: ${amount}$`);
            alert(`Successfully withdrew ${amount}$. New balance: ${this.balance}$`);
        } else if (amount > this.balance) {
            alert('There is no enough balance!');
        } else {
            alert(`Withdraw amount must be greater than 0.`);
        }
    },

    checkBalance: function () {
        alert(`Your current balance is: ${this.balance}$`);
    },

    viewTransactionHistory: function () {
        if (this.transactions.length === 0) {
            alert(`No transactions yet.`);
        } else {
            let history = 'Transaction History:\n';
            this.transactions.forEach((t, index) => {
                history += `${index + 1}. ${t}\n`;
            });
            alert(history);
        }
    }
}

let choise;

do {
    choise = prompt(`
        Welcome to the Bank App!
        What whould you like to do?
        1: Deposit
        2: Withdraw
        3: Check Balance
        4: View Transaction History
        5: Exit
        `);

    switch (choise) {
        case '1':
            let depositAmount = parseFloat(prompt(`Enter amount to deposit:`));
            bankAccount.deposit(depositAmount);
            break;

        case '2':
            let withdrawAmount = parseFloat(prompt(`Enter amount to withdraw:`));
            bankAccount.withdraw(withdrawAmount);
            break;

        case '3':
            bankAccount.checkBalance();
            break;

        case '4':
            bankAccount.viewTransactionHistory();
            break;

        case '5':
            alert(`Thank you for using Bank App!`);

        default:
            alert(`Invalid option, please try again!`);
    }
} while (choise !== '5');