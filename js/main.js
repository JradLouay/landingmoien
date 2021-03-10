var open= false;
function toggleList() {
    !this.open ? (document.getElementById("listItem").classList.add('opacity-100','translate-y-0'), this.open = !this.open)
    : (document.getElementById("listItem").classList.remove('opacity-100','translate-y-0'), document.getElementById("listItem").classList.add('opacity-0','translate-y-1'), this.open = !this.open);
    
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }