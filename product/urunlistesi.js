const apiUrl = "http://localhost:8080/api/product";
const newProductPageUrl = "http://127.0.0.1:5500/product/urunEkleme.html";

// List all products
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let product = document.createElement("div");
      product.classList.add("container");
      product.classList.add("urun");
      product.classList.add("border");
      product.classList.add("p-2");
      product.classList.add("m-2");

      let row = document.createElement("div");
      row.classList.add("row");

      let pName = document.createElement("div");
      pName.classList.add("col");
      pName.textContent = item.productName;

      let pSalePrice = document.createElement("div");
      pSalePrice.classList.add("col");
      pSalePrice.textContent = item.salePrice;

      let buttonsGroup = document.createElement("div");
      buttonsGroup.classList.add("col");

      let btnEdit = document.createElement("button");
      btnEdit.classList.add("m-1");
      btnEdit.textContent = "Düzenle";

      let btnDelete = document.createElement("button");
      btnDelete.classList.add("m-1");
      btnDelete.textContent = "Sil";

      buttonsGroup.appendChild(btnEdit);
      buttonsGroup.appendChild(btnDelete);

      row.appendChild(pName);
      row.appendChild(pSalePrice);
      row.appendChild(buttonsGroup);

      product.appendChild(row);

      let pl = document.getElementById("product-list");
      pl.appendChild(product);
    });
  });

// new product page button
let btnNewProductPage = document.getElementById("newProductPage");
btnNewProductPage.addEventListener("click", redirectToNewProductPage);

function redirectToNewProductPage() {
  window.location.href = newProductPageUrl;
}
