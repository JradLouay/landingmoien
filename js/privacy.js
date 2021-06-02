const chooseLanguage = (language) => {
    toggleList();
  };  
    let openMenu = false;
    
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
    