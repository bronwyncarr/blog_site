(function name(params) {
  function handleClick(e) {
    e.preventDefault();
    const form = document.getElementById("email-contact");
    const formIsOpen = form.classList.contains("hide");
    if (formIsOpen) {
      form.classList.remove("hide");
    } else {
      form.classList.add("hide");
    }
  }
  const emailIcon = document.getElementById("email-icon");
  console.log(emailIcon);
  emailIcon.addEventListener("click", handleClick);

  const realForm = document.getElementById("email-contact-form");
  realForm.addEventListener("submit", function (e) {
    e.preventDefault();
    this.parentElement.classList.add("hide");
  });
})();
