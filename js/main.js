let openMenu = false;
let openModal = false;
function toggleList() {
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
}

function toggleModal() {
  if (!this.openMenu) {
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("modalBg").classList.remove("opacity-0");
    document.getElementById("modalBg").classList.add("opacity-100");
    document
      .getElementById("modal")
      .classList.add("opacity-100", "translate-y-0", "sm:scale-100");
    this.openMenu = !this.openMenu;
  } else {
    document
      .getElementById("modal")
      .classList.remove("opacity-100", "translate-y-0", "sm:scale-100");
      document
      .getElementById("modal")
      .classList.add(
        "opacity-0",
        "translate-y-4",
        "sm:translate-y-0",
        "sm:scale-95"
      );
    document.getElementById("modalBg").classList.remove("opacity-100");
    document.getElementById("modalBg").classList.add("opacity-0");
    document.getElementById("container").classList.add("hidden");
  
    this.openMenu = !this.openMenu;
  }
  // !this.openMenu
  //   ? (document.getElementById("container").classList.remove("hidden"),
  //     document
  //       .getElementById("modal")
  //       .classList.add("opacity-100", "translate-y-0", "sm:scale-100"),
  //     (this.openMenu = !this.openMenu))
  //   : (document
  //       .getElementById("modal")
  //       .classList.remove("opacity-100", "translate-y-0", "sm:scale-100"),
  //     document.getElementById("container").classList.add("hidden"),
  //     document
  //       .getElementById("modal")
  //       .classList.add(
  //         "opacity-0",
  //         "translate-y-4",
  //         "sm:translate-y-0",
  //         "sm:scale-95"
  //       ),
  //     (this.openMenu = !this.openMenu));
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches("listItem1") ||
    !event.target.matches("listItem2")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
focusMethod = function getFocus() {
  document.getElementById("add-Email").focus();
};
