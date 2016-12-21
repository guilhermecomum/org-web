window.onload = function() {

  var editor = document.getElementById("editor");
  var preview = document.getElementById("preview");




  editor.addEventListener('input', function(e) {
    var orgParser = new Org.Parser();
    var orgDocument = orgParser.parse(e.target.value);

    var orgHTMLDocument = orgDocument.convert(Org.ConverterHTML, {
      headerOffset: 1,
      exportFromLineNumber: false,
      suppressSubScriptHandling: false,
      suppressAutoLink: false
    });

    preview.innerHTML = orgHTMLDocument.toString();
  }, false);

}
