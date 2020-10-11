function showActionHistory(codeAction, action, valueUnityAction, cost, totalValueAction, rate, totalNegociation) {
  let result = document.getElementById('table-result');

  let resultLine = document.createElement('tr');

  let resultColumnCodeAction = document.createElement('td');
  resultColumnCodeAction.innerHTML = codeAction;

  let resultColumnAction = document.createElement('td');
  resultColumnAction.innerHTML = action;

  let resultUnityAction = document.createElement('td');
  resultUnityAction.innerHTML = valueUnityAction;

  let resultCost = document.createElement('td');
  resultCost.innerHTML = cost;

  let resultValueAction = document.createElement('td');
  resultValueAction.innerHTML = totalValueAction;

  let resultRate = document.createElement('td');
  resultRate.innerHTML = rate;

  let costNegociation = document.createElement('td');
  costNegociation.innerHTML = costNegociation;

  let setElementCost = document.createElement('td');
  setElementCost.innerHTML = setElementCost;

  let resultTotalNegociation = document.createElement('td');
  resultTotalNegociation.innerHTML = totalNegociation.toFixed(2); 

  resultLine.appendChild(resultColumnCodeAction);
  resultLine.appendChild(resultColumnAction);
  resultLine.appendChild(resultUnityAction);
  resultLine.appendChild(resultCost);
  resultLine.appendChild(resultValueAction);
  resultLine.appendChild(resultRate);
  resultLine.appendChild(resultTotalNegociation);
  

  result.appendChild(resultLine);

}


function buyAction () {
  const costNegociation = 0.00003125;
  const setElementCost = 0.000275;

  let codeAction = document.getElementById('code').value;

  let action = document.getElementById("action").value;
  action = parseFloat(action);

  let valueUnityAction = document.getElementById('valueAction').value;
  valueUnityAction = parseFloat(valueUnityAction);

  let cost = document.getElementById("cost").value;
  cost = parseFloat(cost);

  let totalValueAction = action * valueUnityAction;

  let rate = costNegociation + setElementCost + cost;

  let totalNegociation =  totalValueAction + rate;

  showActionHistory(codeAction, action, valueUnityAction, cost, totalValueAction, rate, totalNegociation,);

  
}

function sellAction () {
  const costNegociation = 0.00003125;
  const setElementCost = 0.000275;

  let codeAction =document.getElementById('code').value;

  let action = document.getElementById("action").value;
  action = parseFloat(action);

  let valueUnityAction = document.getElementById('valueAction').value;
  valueUnityAction = parseFloat(valueUnityAction);

  let cost = document.getElementById("cost").value;
  cost = parseFloat(cost);

  let totalValueAction = action * valueUnityAction;

  let rate = costNegociation + setElementCost + cost;

  let totalNegociation =  totalValueAction - rate;

  showActionHistory(codeAction, action, valueUnityAction, cost, totalValueAction, rate, totalNegociation);

}

function showForm() {
  let displayForm = document.querySelector('.menu');
  if (displayForm && displayForm.style.display == 'block') {
    displayForm.style.display = 'none';    
  } else {
    displayForm.style.display = 'block';
  }
}





