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

/* ✅ FEEDBACK FORM SUBMISSION */
document.getElementById("feedbackForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("http://<ALB-DNS>/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    document.getElementById("responseMsg").innerText =
      response.ok ? "Thank you for your feedback!" : "Submission failed";
  } catch (err) {
    document.getElementById("responseMsg").innerText =
      "Server not reachable";
  }
});
