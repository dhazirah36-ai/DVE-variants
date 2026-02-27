const colorName = document.getElementById("colorName");
const swatches = document.querySelectorAll(".swatch");

swatches.forEach((btn) => {
  btn.addEventListener("click", () => {
    swatches.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-checked", "false");
    });

    btn.classList.add("is-active");
    btn.setAttribute("aria-checked", "true");
    colorName.textContent = btn.dataset.name;

    // Optional: if you later connect this to model-viewer materials,
    // you can switch textures/materials here.
  });
});

const stockToggle = document.getElementById("stockToggle");
const stockText = document.getElementById("stockText");

stockToggle.addEventListener("change", (e) => {
  stockText.style.display = e.target.checked ? "block" : "none";
});