document.addEventListener("DOMContentLoaded", () => {
  let screen = document.getElementById("screen");
  let buttons = document.querySelectorAll("button");
  let screenValue = "";
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let buttonText = this.innerText;
      if (buttonText === "Ac") {
        screenValue = "";
        screen.value = "0";
      } else if (buttonText === "Del") {
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue || "0";
      } else if (buttonText === "=") {
        try {
          screenValue = eval(screenValue).toString();
          screen.value = screenValue;
        } catch {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          screenValue = "";
        }
      } else {
        if (screen.value === "0") {
          screenValue = buttonText;
        } else {
          screenValue += buttonText;
        }
        screen.value = screenValue;
      }
    });
  });
});
