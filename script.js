const form = document.querySelector(".main-form");

form.onsubmit = (e) => {
  e.preventDefault();
  const input = e.target.example;
  const text = input.value;
  const btn = e.submitter;
  const span = document.querySelector("span");
  span.innerHTML = ""

  if (!text) {
    span.innerHTML = "Please enter a value";
    input.classList.remove("border-default");
    input.classList.add("border-danger")
    setTimeout(() => {
      input.classList.remove("border-danger")
      input.classList.add("border-default")
    }, 1000);

  }
  else {
    input.blur();
    if (!btn.classList.contains("btn-disabled")) {
      console.log(text);
      btn.classList.add("btn-loading");
      setTimeout(() => {
        btn.classList.remove("btn-loading");
        btn.classList.add("btn-disabled");

        //   display submission
        const h1 = document.querySelector("h1");
        h1.innerHTML = `Form submitted: ${text}`;
      }, 2000);
    }
  }
};
