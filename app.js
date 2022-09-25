let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "CLEAR":
        display.innerText = "";
        break;
      case "DELETE":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Алдаа!!!";
        }

        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
