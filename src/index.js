const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}