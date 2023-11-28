function generateQr() {
  let textInput = document.getElementById("text-input").value;
  let qrDiv = document.getElementById("qrcontent");
  qrDiv.innerHTML = "";
  let qrGenerator = new QRCode(qrDiv, {
    text: textInput,
    width: 128,
    height: 128,
  });
}
