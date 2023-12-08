document.getElementById("password").addEventListener("input", function () {
  var password = document.getElementById("password").value;
  var strengthBadge = document.getElementById("password-strength");

  var strength = 0;

  if (password.match(/[a-z]+/)) {
      strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
      strength += 1;
  }
  if (password.match(/[0-9]+/)) {
      strength += 1;
  }
  if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) {
      strength += 1;
  }
  if (password.length >= 8) {
      strength += 1;
  }

  switch (strength) {
      case 0:
          strengthBadge.style.backgroundColor = "";
          strengthBadge.innerText = "";
          break;
      case 1:
          strengthBadge.style.backgroundColor = "red";
          strengthBadge.innerText = "Weak";
          break;
      case 2:
          strengthBadge.style.backgroundColor = "orange";
          strengthBadge.innerText = "Fair";
          break;
      case 3:
          strengthBadge.style.backgroundColor = "yellow";
          strengthBadge.innerText = "Moderate";
          break;
      case 4:
          strengthBadge.style.backgroundColor = "lightgreen";
          strengthBadge.innerText = "Good";
          break;
      case 5:
          strengthBadge.style.backgroundColor = "green";
          strengthBadge.innerText = "Strong";
          break;
  }
});
