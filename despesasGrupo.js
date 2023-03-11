//Despesas em Grupo

var groupExpensesList = []; 

class GroupFinancialTransaction {
  description;
  value;
  participants;
  partialValue;

  constructor(description, value, participants) {
    this.description = description;
    this.value = Number(value);
    this.participants = participants;
    this.partialValue = value/participants;
  }
}


function addGroupFinancialTransaction(){
    const addedGroupFinacialTransaction = new GroupFinancialTransaction(
        document.getElementById("group-description-input").value,
        document.getElementById("group-value-input").value,
        document.getElementById("group-participants-input").value
    );

    groupExpensesList.push(addedGroupFinacialTransaction);
    listGroupExpense(addedGroupFinacialTransaction);
    alert(`A despesa ${addedGroupFinacialTransaction.description} foi adicionada com suceso`);
    const btn = document.getElementById('add-new-financial-movement-button');

    btn.addEventListener('click', function handleClick(event) {
      
      event.preventDefault();

      const inputs = document.querySelectorAll('#group-description-input, #group-value-input, #group-participants-input');

      inputs.forEach(input => {
        input.value = '';
      });
    });

  };

function listGroupExpense(expenseObj){
  if(expenseObj.description!=null&&expenseObj.value!=0&&expenseObj.participants!=0){
    let description = document.createElement("li");
    description.innerHTML= expenseObj.description;
    document.getElementById("group-title").appendChild(description)
    let participants = document.createElement("li");
    participants.innerHTML= expenseObj.participants;
    document.getElementById("number-of-participants").appendChild(participants);
    let amount = document.createElement("li");
    amount.innerHTML= `R$ ${expenseObj.value}`;
    document.getElementById("total-amount").appendChild(amount);
    let partialValue = document.createElement("li");
    partialValue.innerHTML= `R$ ${expenseObj.partialValue}`;
    document.getElementById("partial-value").appendChild(partialValue);
  }
  else {
    alert("Favor de inserir todos os dados");
  }
};