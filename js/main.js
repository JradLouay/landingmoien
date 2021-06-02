let openMenu = false;
let openModal = false;

const emailForm = document.getElementById("form");
const emailInput = document.getElementById("emailInput");

const toggleList = () => {
  !this.openMenu
    ? (document
        .getElementById("listItem1")
        .classList.add("opacity-100", "translate-y-0"),
      (this.openMenu = !this.openMenu))
    : (document
        .getElementById("listItem1")
        .classList.remove("opacity-100", "translate-y-0"),
      document
        .getElementById("listItem1")
        .classList.add("opacity-0", "translate-y-1"),
      (this.openMenu = !this.openMenu));
};
const chooseLanguage = (language) => {
  toggleList();
};
const focusMethod = () => {
  document.getElementById("emailInput").focus();
};

const toggleModal = () => {
  if (!this.openModal) {
    document.getElementById("modalContainer").classList.remove("hidden");
    document.getElementById("modalBg").classList.remove("opacity-0");
    document.getElementById("modalBg").classList.add("opacity-100");
    document
      .getElementById("modalContent")
      .classList.remove(
        "opacity-0",
        "translate-y-4",
        "sm:translate-y-0",
        "sm:scale-95"
      );
    document
      .getElementById("modalContent")
      .classList.add(
        "transation",
        "ease-out",
        "duration-300",
        "opacity-100",
        "translate-y-0",
        "sm:scale-100"
      );
    this.openModal = !this.openModal;
  } else {
    document
      .getElementById("modalContent")
      .classList.remove(
        "transation",
        "ease-out",
        "duration-300",
        "opacity-100",
        "translate-y-0",
        "sm:scale-100"
      );
    document
      .getElementById("modalContent")
      .classList.add(
        "transation",
        "ease-in",
        "duration-300",
        "opacity-0",
        "translate-y-4",
        "sm:translate-y-0",
        "sm:scale-95"
      );
    document.getElementById("modalBg").classList.remove("opacity-100");
    document.getElementById("modalBg").classList.add("opacity-0");
    document.getElementById("modalContainer").classList.add("hidden");

    this.openModal = !this.openModal;
  }
};
const sendEmail = (email) => {
  const dataToSend = JSON.stringify({
    email: email,
  });
  let dataReceived = "";
  fetch("https://testbo.moien.com/API/customer/prospect", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataToSend,
  })
    .then((resp) => {
      if (resp.status === 200) {
        toggleModal();
        document.querySelector("#emailInput").value = "";
        return resp.json();
      } else {
        alert("Internet Connexion lost !!!");
        return Promise.reject("server");
      }
    })
    .then((dataJson) => {
      dataReceived = JSON.parse(dataJson);
    })
    .catch((err) => {
      if (err === "server") return;
    });
};
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const getEmail = (event) => {
  const email = event.target.elements.emailInput.value;

  if (email.length === 0) {
    alert("email field is Empty");
    event.preventDefault();
  } else {
    if (validateEmail(email)) {
      sendEmail(email);
    } else {
      alert("email invalid");
    }
  }
  event.preventDefault();
};

window.onclick = (event) => {
  if (event.target.id === "modalBg") toggleModal();
};
// window.addEventListener("mousedown", function (event) {
//   let list = document.getElementById("listItem1");
//   if (list.classList.contains("opacity-100")) {
//     toggleList();
//   }
// });

emailForm.addEventListener("submit", getEmail);
