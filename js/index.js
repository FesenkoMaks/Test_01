// Плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Валидация формы

let inputs = document.querySelectorAll("input[data-rule]");

for (let input of inputs) {
  input.addEventListener("blur", function () {
    let rule = this.dataset.rule;
    let value = this.value;
    let check;
    switch (rule) {
      case "length":
        check = value.length >= 3;
        break;
      case "number":
        check = /^\d+$/.test(value);
        break;
    }
    if (check) {
      this.classList.remove("invalid");
      this.classList.add("valid");
    } else {
      this.classList.remove("valid");
      this.classList.add("invalid");
    }
  });
}
