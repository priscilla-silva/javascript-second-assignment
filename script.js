// // BANK ACCOUNT

// // Start by creating the object and the properties. You can leave the functions empty for now if you want.
// // You'll find all the information about what properties the object should have in the readme file.

// // In the deposit and withdrawal function use this code to show the prompt
// parseFloat(prompt("Put some proper message here"));
// // You need to change the message of course. You should also do some research why parseFloat() is used here
// // answer by making a comment in the code.
// // Be aware of that you need to add some code to this so you can display the actual input.

// // In the deposit and withdrawal function you also need to handle som potential errors.
// // To handle one of the potential error you can use this piece of code
// isNaN(variableName);
// // you need to change the variableName to your actual variable.
// // you also need to check some other conditions here and use a logical operator.
// // try to say the sentece out loud or think it:
// // "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// // Do you know what operator you should use?

// // In the accountError and accountExit function you can use this to show a message to the user:
// alert("your code here and maybe properties");
// // of course you need to put a proper message and you might need to display some of the properties.

// // STARTER FUNCTION
// function atm() {
//   let choice = parseInt(prompt("Display menu choices here"));
//   //prompt user for choice.

//   // you can use the variable choice for your switch or if/else statement
//   // so choice will hold the value of the user input.
// }





const accountObject = {
  accountName: "Britney Spears",
  balance: 100,
  getBalance: function() {
    alert(`Your account balance is $${this.balance}`);
},
  deposit: function() {
    let dep = parseFloat(prompt("How much do you want to deposit? Enter an amount."));
    //Now MY OWN CODE is rebelling against me?! The audacity!
    if (dep < 1 || NaN) {
      this.accountError();
    } else {
      alert(`Your new balance is $${(this.balance) + (dep)}`);
    } atm();
    // check with ||, then call for this function inside of atm function
    // this.deposit();
    
  },
  withdrawal: function() {
    //same as deposit, or similar
  },
  getAccountName: function() {
  alert(`${this.accountName}`); 
  },
  accountError: function() {
  alert('Please enter a valid amount');

  },
  exitAccount: function () {

  },
  
};

function atm() {
let choice = parseInt(prompt("Select an option by entering the corresponding number: 1)Check balance 2)Make a deposit 3)Make a withdrawal 4)Get account holder's name 5)Exit"));
if (choice === 1) {
  accountObject.getBalance();
  atm();
} else if (choice === 2){
    accountObject.deposit();
  } else if (choice === 3) {

  } else if (choice === 4) {
    accountObject.getAccountName();
    atm();
  }  else if (choice === 5) {
    self.close();
  }
}
//console log object.ldjajlk because we are already using the prompt

atm();
