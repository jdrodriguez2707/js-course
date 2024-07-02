const transactions = [
  { id: 1, description: "Salary", amount: 3000 },
  { id: 2, description: "Clothes purchase", amount: -150 },
  { id: 3, description: "Car sale", amount: 5000 },
  { id: 4, description: "Food purchase", amount: -200 },
  { id: 5, description: "Services pay", amount: -100 },
  { id: 6, description: "Extra income", amount: 400 },
  { id: 7, description: "Furniture purchase", amount: -800 },
  { id: 8, description: "Bicycle sale", amount: 150 },
  { id: 9, description: "Taxes devolution", amount: 700 },
  { id: 10, description: "Purchase of books", amount: -50 },
];

const calculateTotalBalance = (transactions) =>
  transactions.reduce(
    (accumulator, currentTransaction) =>
      accumulator + currentTransaction.amount,
    0
  );

function findLargestTransaction(transactions) {
  const largestTransaction = transactions.reduce(
    (largest, currentTransaction) => {
      if (Math.abs(currentTransaction.amount) > Math.abs(largest.amount)) {
        return currentTransaction;
      }
      return largest;
    },
    transactions[0]
  );

  return largestTransaction;
}

const showPurchaseTransactions = (transactions) =>
  transactions.filter((transaction) => transaction.amount < 0);

const findTransactionByDescription = (transactions, targetDescription) =>
  transactions.find(
    (transaction) =>
      targetDescription.toLowerCase() === transaction.description.toLowerCase()
  );

const findTransactionIndexByAmount = (transactions, targetAmount) =>
  transactions.findIndex((transaction) => targetAmount === transaction.amount);

function updateTransactionDescriptions(transactions) {
  transactions.forEach((transaction) => {
    transaction.description =
      transaction.amount < 0
        ? `Spent: ${transaction.description}`
        : `Income: ${transaction.description}`;
  });

  return transactions;
}

console.log(`Total balance: ${calculateTotalBalance(transactions)}`);
console.log("The largest transaction:", findLargestTransaction(transactions));
console.log("Purchase transactions:", showPurchaseTransactions(transactions));
console.log(
  "Transaction found by description:",
  findTransactionByDescription(transactions, "furniture purchase")
);
console.log(
  `Transaction index found by amount: ${findTransactionIndexByAmount(
    transactions,
    -150
  )}`
);
console.log(
  "Updated transaction descriptions:",
  updateTransactionDescriptions(transactions)
);
