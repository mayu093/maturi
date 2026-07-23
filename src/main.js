// JavaScriptのメインファイル
console.log("main.js loaded");

function openModal() {
  document.getElementById("ticket-modal").classList.add("active");
}

function closeModal() {
  document.getElementById("ticket-modal").classList.remove("active");
}
