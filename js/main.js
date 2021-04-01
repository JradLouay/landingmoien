var open = false;
function toggleList() {
  !this.open
    ? (document
        .getElementById("listItem1")
        .classList.add("opacity-100", "translate-y-0"),
      (this.open = !this.open))
    : (document
        .getElementById("listItem1")
        .classList.remove("opacity-100", "translate-y-0"),
      document
        .getElementById("listItem1")
        .classList.add("opacity-0", "translate-y-1"),
      (this.open = !this.open));
 
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("listItem1") || !event.target.matches("listItem2")) {
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
}
