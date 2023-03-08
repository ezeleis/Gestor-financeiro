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
  };

function listGroupExpense(expenseObj){
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



    //   createHtmlListFromArray(objectsArray, listElementId) {
    //     for (var i = 0; i < objectsArray.length; i++) {
    //       this.createListItem(objectsArray[i], listElementId);
    //     }
    //   }
    
    //   createListItem(object, listElementId) {
    //     var li = document.createElement('li');
    //     li.innerText = `${object.description}: R$ ${object.value}`;
    
    //     document.getElementById(listElementId).appendChild(li);
    //   }