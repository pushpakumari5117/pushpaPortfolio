(function () {

  const nav = document.querySelector(".nav"),
    LIElement = nav.querySelectorAll("li"),
    LIlength = LIElement.length,
    sectionElement = document.querySelectorAll(".section"),
    sectionLength = sectionElement.length,
    active = "active",
    open = "open",
    navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

  // Preloader
  window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function () {
      document.querySelector(".preloader").style.display = "none";
    }, 1000)
  });

  // Left Navigation
  for (let i = 0; i < LIlength; i++) {
    const a = LIElement[i].querySelector("a");

    a.addEventListener("click", function () {
      for (let i = 0; i < sectionLength; i++) {
        sectionElement[i].classList.remove("back-section");
      }
      for (let j = 0; j < LIlength; j++) {
        if (LIElement[j].querySelector("a").classList.contains(active)) {
          sectionElement[j].classList.add("back-section")
        }
        LIElement[j].querySelector("a").classList.remove(active);
      }
      this.classList.add(active);
      showActivePage(this);

      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    })
  }

  // Show the active page
  function showActivePage(element) {
    for (let i = 0; i < sectionLength; i++) {
      sectionElement[i].classList.remove(active);
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add(active)
  }


  function asideSectionTogglerBtn() {
    aside.classList.toggle(open);
    navTogglerBtn.classList.toggle(open);

    for (let i = 0; i < sectionLength; i++) {
      sectionElement[i].classList.toggle(open);
    }
  }

  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  })

})();