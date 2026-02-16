document.addEventListener("DOMContentLoaded", function () {

  const assignedCheck = document.getElementById("assignedCheck");
  const assignedBox = document.getElementById("assignedPortsBox");
  const startPort = document.getElementById("startPort");
  const endPort = document.getElementById("endPort");

  // Generate fa0/1 → fa0/24
  for (let i = 1; i <= 24; i++) {
    const opt1 = document.createElement("option");
    opt1.value = i;
    opt1.textContent = "fa0/" + i;

    const opt2 = opt1.cloneNode(true);

    startPort.appendChild(opt1);
    endPort.appendChild(opt2);
  }

  // Toggle hiện/ẩn range
  assignedCheck.addEventListener("change", function () {
    if (this.checked) {
      assignedBox.style.display = "flex";
    } else {
      assignedBox.style.display = "none";
    }
  });

});
