// script.js

const message = `📄 Monarc Nexus – Project Details\n\n🔗 Brochure : https://drive.google.com/file/d/1oiPoEB0zeJSd-ZqvCixrvPQ4xXn10oCN/view?usp=drive_link\n\n📍 Site Location : https://maps.app.goo.gl/MgcsscnUBq8jWr2L6\n\n📸 (Image for reference attached below)\n\n🏢 Project Name: Monarc Nexus\n\n📍 Residential + Commercial\n     | 14-Story Premium Development\n\n🚦 Prime 3-Side Road Connectivity:\n\n Connected Roads\n▪36 Meter Road – Ahm-Palanpur Hwy Rd ↔ SG Hwy\n▪18 Meter Road ↔ 200 ft Ring Road\n▪12 Meter Road – Intern TP Road`;

function sendMessage() {
  const phone = document.getElementById("phoneNumber").value.trim();
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }
  const fullNumber = '91' + phone;
  const url = `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
  if (navigator.vibrate) navigator.vibrate(100);
  window.open(url, "_blank");
  showToast();
}

function copyMessage() {
  navigator.clipboard.writeText(message).then(() => alert("Message copied to clipboard!"));
}

function downloadBrochure() {
  const brochureLink = "https://drive.google.com/uc?export=download&id=1oiPoEB0zeJSd-ZqvCixrvPQ4xXn10oCN";
  window.open(brochureLink, "_blank");
  console.log("User clicked to download the brochure.");
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
}

document.getElementById("phoneNumber").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
