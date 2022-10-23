'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Dan Volkswagon',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Display the account movements in movements container 
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach((amt, i) => {
    const type = amt > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${amt}</div>
</div>`;

containerMovements.insertAdjacentHTML('afterbegin', html);
});
}

// Calculate current balance
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = `${acc.balance} €`;
}

// Display summary: in, out, interest
const calcDisplaySummary = function(acc) {
  const inTotal = acc.movements
  .filter(amt => amt > 0)
  .reduce((acc, cur) => acc + cur);
  labelSumIn.textContent = `${inTotal} €`;

  const outTotal = acc.movements
  .filter(amt => amt < 0)
  .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outTotal)} €`;

  const interest = acc.movements
  .filter(amt => amt > 0)
  .map(amt => amt * (acc.interestRate / 100))
  .filter(int => int >= 1)
  .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${Math.round(interest)} €`;
};

// Assign a short-hand username for each account
const createUserNames = function(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
} 
createUserNames(accounts);

// Display currency function
const updateCurrency = function() {
  calcDisplayBalance(currentAccount);
  displayMovements(currentAccount.movements);
  calcDisplaySummary(currentAccount);
};

// EVENT HANDLERS ///////////////////

// Login with credentials
let currentAccount;
btnLogin.addEventListener('click', function(e) {
  // prevent html form from submitting
  e.preventDefault();
  // get current account username and pin
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value.toLowerCase());
  if (currentAccount?.pin === +inputLoginPin.value) { 
  // display UI and message
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
  containerApp.style.opacity = '1';
  // clear input fields, remove focus
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  updateCurrency();
  }
});

// Transfer money
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const transferToAccount = accounts.find(acc => acc.username === inputTransferTo.value); 
  const amount = +inputTransferAmount.value;

  inputTransferTo.value = inputTransferAmount.value = '';

  if (transferToAccount && transferToAccount !== currentAccount && amount > 0 && amount <= currentAccount.balance) {
    console.log('Transfer Valid');
    currentAccount.movements.push(-amount);
    transferToAccount.movements.push(amount);
    updateCurrency();
  }
});

// Request loan
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  inputLoanAmount.value = '';

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.10)) {
    currentAccount.movements.push(amount);
    updateCurrency();
  }
});

// Close account
btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  // const index = accounts.indexOf(currentAccount);
  
  if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc === currentAccount);
    
    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
    window.scrollTo(0, 0);
  };

  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault()

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// These modern loops are beneficial because of chaining

// ForEach()
/* movements.forEach((amt, i, arr) => amt > 0 ? console.log(`Transaction ${i + 1}: You deposited ${amt} dollars.`) : console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(amt)} dollars`)); */

// Map()
/* const euroToUSD = 1.1;

const movementsToUSD = movements.map(amt => amt * euroToUSD);

console.log(movements);
console.log(movementsToUSD);

const movementsDescription = movements.map((amt, i) => `Transaction ${i + 1}: You ${amt > 0 ? 'deposited' : 'withdrew'} ${Math.abs(amt)} dollars` );

console.log(movementsDescription); */

// Filter()
/* console.log(movements);

const deposits = movements.filter(amt => amt > 0);
console.log(deposits);

const withdrawals = movements.filter(amt => amt < 0);
console.log(withdrawals);

// Old for-of method
const depositsForOf = [];
for (const amt of movements) amt > 0 && depositsForOf.push(amt);
console.log(depositsForOf)

const withdrawalsForOf = [];
for (const amt of movements) amt < 0 && withdrawalsForOf.push(amt);
console.log(withdrawalsForOf); */

// reduce()
/* const max = movements.reduce((acc, cur) => acc > cur ? acc : cur)
console.log(max); */

// find()
/* const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
// for-of version
for (const acc of accounts) acc.owner === 'Jessica Davis' && console.log(acc); */

// flat()
/* const overallBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, cur) => acc + cur);
console.log(overallBalance); */

// flatMap() version; can only go 1 level deep
/* const totalBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur);
  console.log(totalBalance); */

// sort()
/* movements.sort((a, b) => a - b);
console.log(movements); */

// Array.from
/* const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); */
// 100 dice rolls challenge
/* const diceRolls100 = Array.from({ length: 100 }, (_, i) => Math.ceil(Math.random() * 6));
console.log(diceRolls100); */
// Click on balance total to capture an array of pure numbers from the movements shown in the UI
/* labelBalance.addEventListener('click', function() {
  const movementValuesArr = Array.from(document.querySelectorAll('.movements__value'), (ele => +ele.textContent.replace('€', '')));

  console.log(movementValuesArr);
});  */
// alternative using spread
/* labelBalance.addEventListener('click', function() {
  const movesValuesArr = [...document.querySelectorAll('.movements__value')].map(ele => +ele.textContent.replace('€', ''));

  console.log(movesValuesArr);
}); */