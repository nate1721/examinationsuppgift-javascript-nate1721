let balance = 0;

const descInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

const incomeBtn = document.querySelector("#incomeBtn");
const expenseBtn = document.querySelector("#expenseBtn");

const incomeList = document.querySelector("#incomeList");
const expenseList = document.querySelector("#expenseList");

const balanceElement = document.querySelector("#balance");

function addTransaction(type) {
  const description = descInput.value.trim();
  const amount = Number(amountInput.value);

  if (description === "" || amountInput.value.trim() === "" || isNaN(amount)) {
    return;
  }

  const li = document.createElement("li");

  if (type === "income") {
    li.textContent = description + " - " + amount + " kr (Inkomst)";
    incomeList.appendChild(li);
    balance += amount;
  } else {
    li.textContent = description + " - " + amount + " kr (Utgift)";
    expenseList.appendChild(li);
    balance -= amount;
  }

  balanceElement.textContent = balance;

  descInput.value = "";
  amountInput.value = "";
}

incomeBtn.addEventListener("click", function () {
  addTransaction("income");
});

expenseBtn.addEventListener("click", function () {
  addTransaction("expense");
});
