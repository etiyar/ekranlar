const apiUrl = "http://3.68.89.203:8081/api/dealer";

let ul = document.getElementById("dealerList");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((bayi) => {
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.classList.add("m-2");

      let p = document.createElement("p");
      p.textContent = bayi.name;
      li.appendChild(p);

      li.addEventListener("click", () => {
        // Eski aktif öğeyi kaldır
        const activeItem = document.querySelector(".bg-info");

        if (activeItem) {
          activeItem.classList.remove("bg-info");
        }

        // Tıklanan öğeye aktif sınıfını ekle
        li.classList.add("bg-info");

        console.log(bayi.id);
      });

      ul.appendChild(li);
    });
  });
