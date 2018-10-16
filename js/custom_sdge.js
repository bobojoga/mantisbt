$(function() {
    
  $(".fa-status-box").each(function() {
    var $this = $(this);
    var col = $this.css('color');
    var a = col.slice(4).split(',');
    var newAlpha = 0.3;
    var bgCol = 'rgba('+a[0]+','+parseInt(a[1])+','+parseInt(a[2])+','+newAlpha+')';
    $this.closest("tr").css("background-color", bgCol);
  });
  
  
  $(".fa-file-word-o").each(function() {
      var $this = $(this);
      var childNode = $this[0];

      if (childNode.title == "Word 2000") {
          var printLink = document.createElement("a");
          printLink.href = "#";

          printLink.addEventListener("click", function(e) {
                  createPrintDialog();
          }, false);

          iconElement = document.createElement("i");
          iconElement.classList.add("fa");
          iconElement.classList.add("fa-print");
          iconElement.title = "Ispis stranice";

          printLink.appendChild(iconElement);
          printLink.innerHTML += '&nbsp;';

          childNode.parentNode.before(printLink);
      }
    });
});

function createPrintDialog(){
  window.print();
}