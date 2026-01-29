function openModal(title) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (e) {
  if (e.target.id === "modal") {
    closeModal();
  }
};
