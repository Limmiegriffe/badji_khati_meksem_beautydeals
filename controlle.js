function validateForm(event) {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let cardnumber = document.getElementById("cardnumber").value;
    let cardcvv = document.getElementById("cardcvv").value;
    let confirmcardcvv = document.getElementById("confirmcardcvv").value;
  
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let usernamePattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    let addressPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9\s]+$/;
    let cardPattern = /^[0-9]+$/;
  
    if (!emailPattern.test(email)) {
      alert("Veuillez entrer une adresse Gmail valide.");
      event.preventDefault();
    }
    if (!usernamePattern.test(username)) {
      alert("Le nom d'utilisateur doit contenir des lettres et des chiffres.");
      event.preventDefault();
    }
    if (password.length < 8) {
      alert("Le mot de passe doit contenir plus de 8 caractères.");
      event.preventDefault();
    }
    if (!addressPattern.test(address)) {
      alert("L'adresse doit contenir à la fois des lettres et des chiffres.");
      event.preventDefault();
    }
    if (!cardPattern.test(cardnumber)) {
      alert("Le numéro de carte bancaire doit contenir uniquement des chiffres.");
      event.preventDefault();
    }
    if (!cardPattern.test(cardcvv) || !cardPattern.test(confirmcardcvv)) {
      alert("Le code de carte bancaire doit contenir uniquement des chiffres.");
      event.preventDefault();
    }
    if (cardcvv !== confirmcardcvv) {
      alert("Les codes de carte bancaire doivent être identiques.");
      event.preventDefault();
    }
  }
  