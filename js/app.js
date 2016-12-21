window.onload = function() {

  var editor = document.getElementById("editor");
  var preview = document.getElementById("preview");

  editor.addEventListener('input', function(e) {
    preview.innerHTML = e.target.value;
  }, false);

}
