const panels = document.querySelectorAll(".panel");
let activePanel = panels[0];

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
    activePanel = panel;
  });
});

function removeActiveClass() {
  activePanel.classList.remove("active");
}
