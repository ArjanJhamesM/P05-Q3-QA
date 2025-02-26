var i = 0;
var txt = homepageDescriptionText;
var speed = 50;

function typewriterHomepageDescription()
{
  if (i < txt.length) {
    document.getElementById("homepage-description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriterHomepageDescription, speed);
  }
}

function loadTypewriterEffects()
{
  typewriterHomepageDescription()
}

function signupSubmit()
{
  let errorMessage = "All fields with asterisk (*) are required";
  var firstName = document.forms["signup"]["first-name"].value;
  var lastName = document.forms["signup"]["last-name"].value;
  var username = document.forms["signup"]["username"].value;
  var password = document.forms["signup"]["password"].value;
  var confirmPassword = document.forms["signup"]["confirm-password"].value;
  var birthday = document.forms["signup"]["birthday"].value;

  if ((firstName == "") || (lastName == "") || (username == "") || (password == "") || (confirmPassword == "") || (birthday == ""))
  {
    alert(errorMessage);
    return false;
  }
  else
  {
    window.alert("Welcome to keeb.tles! Please check your inbox for our account confirmation email");
  }
}