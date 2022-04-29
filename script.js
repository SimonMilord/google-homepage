let query = document.getElementById('search');
let form = document.getElementById('form');

form.onsubmit = function(event) {
  event.preventDefault();
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_blank");
}