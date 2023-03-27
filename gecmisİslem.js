const apiurl = "http://3.68.89.203:8080/api/delivery/2";

let total = document.getElementById("total");
let paid = document.getElementById("paid");
let remaining = document.getElementById("remaining");
let previousDebt = document.getElementById("previousDebt");
let currentDebt = document.getElementById("currentDebt");
let dateElement = document.getElementById("date");

fetch(apiurl)
  .then((res) => res.json())
  .then((data) => {
    total.textContent = data.totalAmount;
    paid.textContent = data.paidAmount;
    remaining.textContent = data.remainingAmount;
    previousDebt.textContent = data.previousDebt;
    currentDebt.textContent = data.newDebt;
    dateElement.textContent = formatDate(data.deliveryTime.toString());

    data.deliveryItems.forEach((element) => {
      let item = document.createElement("div");
      item.classList.add("card");
      item.classList.add("m-2");
      item.classList.add("p-2");
      item.textContent = `${element.productName} ${element.quantity} x ${element.productPrice}`;
      let price = document.createElement("span");
      price.textContent = `Fiyatı : ${element.subTotal} ₺`;
      price.classList.add("pt-1");

      let orderItems = document.getElementById("orderItems");

      orderItems.appendChild(item);
      item.appendChild(price);
    });
  });

function formatDate(dateInput) {
  const dateArray = dateInput.split(",");
  const date = new Date(
    dateArray[0],
    dateArray[1] - 1,
    dateArray[2],
    dateArray[3],
    dateArray[4]
  );
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const normalDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]} ${formattedHours}:${formattedMinutes}`;
  return normalDate;
}
