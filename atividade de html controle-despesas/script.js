const transactionUl = document.querySelector("#transactions");
const incomeDisplay = document.querySelector('#money-plus')
const despDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('#amount') 
console.log(form)
// console.log({incomeDisplay, expenseDisplay, balanceDisplay});

const dummyTransactions = [
  { id: 1, name: "Bolo de brigadeiro", amount: - 20 },
  { id: 2, name: "Salário", amount: 300 },
  { id: 3, name: "Torta de limão", amount: -10 },
  { id: 4, name: "Bateria", amount: - 150 },
];

const addTransactionIntoDOM = (transaction) => {
  const operator = transaction.amount < 0 ? "-" : "+";
  const CSSClass = transaction.amount < 0 ? "minus" : "plus";
  const amountWithoutOperator = Math.abs(transaction.amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `
        ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
  `;
  transactionUl.append(li);
//   transactionUl.prepend(li);

  // console.log(li);
  //console.log(operator);

  {
    // <li class="minus">
    //     Salário <span>-$400</span><button class="delete-btn">x</button>
    // </li>
  }
};

// addTransactionIntoDOM(dummyTransactions[0]);
// addTransactionIntoDOM(dummyTransactions[1]);

const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransactions.map(
      (transaction) => transaction.amount
    );
    const total = transactionsAmounts.reduce((acumulator, transaction) => acumulator + transaction, 0).toFixed(2);
    const income = transactionsAmounts
    .filter((value) => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);
    // console.log(income)

    
    const desp = Math.abs (transactionsAmounts
    .filter((value) => value < 0 )
    .reduce((accumulator, value)=> accumulator + value,0))
    .toFixed(2);

    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    despDisplay.textContent = `R$ ${desp}`
  };
  

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM);
  updateBalanceValues();
};

init();

const generateID = ()=> Math.round(Math.random()*1000)

form.addEventListener('submit', event => {
  event.preventDefault()
  const transName = inputTransactionName.value.trim()
  const transAmount = inputTransactionAmount.value.trim()
  if(transName==='' || transAmount === ''){
   alert('Por gentileza preencha tanto o nome quanto o valor da transação!!!')
   return
  }
  const transaction = { id: generateID(), name: transName, amount: transAmount }
})


// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// sum

// const randomNumbers = [36, 97, 37, 63]
// const numbersGreaterThan = randomNumbers.filter(item => item > 37)
// numbersGreaterThan