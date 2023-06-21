const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Пожалуйста, введите вашу информацию!',
          })
    }

    let amountPerPerson = bill/people;
    let tipPerPerson = (bill*tip)/people;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;
}

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
}