'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Dan Volkswagon',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2022-10-22T14:18:46.235Z',
    '2022-10-23T16:33:06.386Z',
    '2022-10-27T14:43:26.374Z',
    '2022-10-28T18:49:59.371Z',
    '2022-10-29T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-06-25T18:49:59.371Z',
    '2022-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

// FUNCTIONS ///////////////////

// Sort moves with dates
const sortMoves = (movs, dates) => {
  const arrJoined = [], sortedMovs = [], sortedDates = []

  movs.forEach((ele, i) => arrJoined.push([movs[i], dates[i]]))
  console.log(arrJoined)
  arrJoined
    .sort((a, b) => a[0] - b[0])
    .forEach(ele => {
      sortedMovs.push(ele[0])
      sortedDates.push(ele[1])
    })
    console.log(sortedMovs, sortedDates);
  return [sortedMovs, sortedDates]
};

// Format dates and display days ago on movements
const formatMovementsDates = date => {
  const calcDaysPassed = (date1, date2) => 
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)))
  
  const daysPassed = calcDaysPassed(new Date(), date)

  if (daysPassed === 0) return 'Today'
  if (daysPassed === 1) return 'Yesterday'
  if (daysPassed <= 7) return `${daysPassed} days ago`

  return new Intl.DateTimeFormat(currentAccount.locale).format(date);
  /* const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const day = `${date.getDate()}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${month}/${day}/${year}`; */
}

// Display proper currency type
const currencyType = amt => {
  const options = {
    style: 'currency',
    currency: currentAccount.currency,
  }

  return new Intl.NumberFormat(currentAccount.locale, options).format(amt);
}

// Display the account movements in movements container 
const displayMovements = (acc, sort = false) => {
  containerMovements.innerHTML = '';

  // const moves = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  const [moves, dates] = sort ? sortMoves(acc.movements, acc.movementsDates) : [acc.movements, acc.movementsDates];

  moves.forEach((amt, i) => {
    const type = amt > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(dates[i]);
    const displayDate = formatMovementsDates(date);

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${currencyType(amt)}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
});
}

// Calculate current balance
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = `${currencyType(acc.balance)}`;
}

// Display summary: in, out, interest
const calcDisplaySummary = function(acc) {
  const inTotal = acc.movements
    .filter(amt => amt > 0)
    .reduce((acc, cur) => acc + cur);
  labelSumIn.textContent = `${currencyType(inTotal)}`;

  const outTotal = acc.movements
    .filter(amt => amt < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${currencyType((Math.abs(outTotal)))}`;

  const interest = acc.movements
    .filter(amt => amt > 0)
    .map(amt => amt * (acc.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${currencyType(interest)}`;
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
  displayMovements(currentAccount);
  calcDisplaySummary(currentAccount);
};

// Logout timer
const logoutTimer = function() {

  const tick = function() {
    const min = String(Math.trunc(startTime / 60)).padStart(2, 0);
    const sec = String(startTime % 60).padStart(2, 0);
    startTime--;

    if (startTime < 0) {
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = '0';
      clearInterval(timer);
    }

    labelTimer.textContent = `${min}:${sec}`;
  }

  let startTime = 300;
  
  tick();
  return timer = setInterval(tick, 1000)
}

// Reset logout timer
const resetTimer = function() {
  if (timer) clearInterval(timer);
  timer = logoutTimer();
}

// EVENT HANDLERS ///////////////////
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateCurrency();
// containerApp.style.opacity = '1';

// Login with credentials
btnLogin.addEventListener('click', function(e) {
  // prevent html form from submitting
  e.preventDefault();
  // get current account username and pin
  currentAccount = accounts.find(acc => acc.username ===  inputLoginUsername.value.toLowerCase());
  if (currentAccount?.pin === +inputLoginPin.value) { 
  // display UI and message
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
  containerApp.style.opacity = '1';
  // create current balance date
  const now = new Date();
  const options = {
    // weekday: 'long',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
  /* const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const day = `${now.getDate()}`.padStart(2, 0);
  const year = now.getFullYear();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);

  labelDate.textContent = `${month}/${day}/${year}, ${hour}:${min}`; */
  // clear input fields, remove focus
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  // update UI
  updateCurrency();
  // login Timer
  resetTimer();
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
    currentAccount.movementsDates.push(new Date().toISOString());

    transferToAccount.movements.push(amount);
    transferToAccount.movementsDates.push(new Date().toISOString());
    updateCurrency();
    resetTimer();
  }
});

// Request loan
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  inputLoanAmount.value = '';

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.10)) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateCurrency();
      resetTimer();
    }, 3000)
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
    resetTimer();
  };

  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault()

  displayMovements(currentAccount, !sorted);
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
/////////////////////////////////////////////////
// LECTURES

// Using modulus, paint every other, every 3rd
/* labelBalance.onclick = function() {
[...document.querySelectorAll('.movements__row')].forEach((row, i) => {
  // if (i % 2 === 0) row.style.backgroundColor = 'blue';
  if (i % 3 === 0) row.style.backgroundColor = 'purple';
});
}; */

// Practice: set a ticking clock in the console using the interval method

// new Date method
/* setInterval(function() {
  const now = new Date();
  const hours = `${now.getHours()}`.padStart(2, 0);
  const mins = `${now.getMinutes()}`.padStart(2, 0);
  const secs = `${now.getSeconds()}`.padStart(2, 0);

  console.log(`${hours}:${mins}:${secs}`);
}, 1000) */

// new Intl method
/* setInterval(() => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }

  const tickNow = new Intl.DateTimeFormat('en-US', options).format(new Date())

  console.log(tickNow);
}, 1000) */