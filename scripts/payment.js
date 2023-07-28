console.log("Payment Page");

document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Payment processed successfully!");
    document.getElementById("paymentForm").reset();

    setTimeout(() => {
      window.location = "/home.html";
    }, 3000);
  });
