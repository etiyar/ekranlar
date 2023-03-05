const apiUrl = "http://localhost:8080/api/product";

let saveBtn = document.getElementById("saveButton");

saveBtn.addEventListener("click", sendDatas);

function sendDatas() {
  const productNameInput = document.getElementById("productName").value;
  const productPriceInput = document.getElementById("productPrice").value;

  const product = {
    productName: productNameInput,
    salePrice: productPriceInput,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
