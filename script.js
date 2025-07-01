function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);
  const result = document.getElementById("result");

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    result.innerHTML = "⚠️ Please enter valid values.";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;

  result.innerHTML = `Each person should pay: <strong>$${perPerson.toFixed(
    2
  )}</strong>`;
}
