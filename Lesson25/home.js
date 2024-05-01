document.getElementById("enter-chat").addEventListener("click", () => {
  const name = document.getElementById("name-box").value;
  localStorage.setItem("name", name);

  window.location.href = "/message.html";
});

if (localStorage.getItem("name")) {
  window.location.href = "/message.html";
}
